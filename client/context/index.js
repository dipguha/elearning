import { useReducer, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter, userRouter } from "next/router";

// Represents the global state, which starts with the user set to null.
const intialState = {
  user: null,
};

// Creates a React Context to share state and actions (dispatch) across the component tree without passing props manually.
const Context = createContext();

// root reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// Wraps the application to provide access to state and dispatch
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, intialState);

    // router
    const router = useRouter();
      
    useEffect(() => {
      dispatch({
        type: "LOGIN",
        payload: JSON.parse(window.localStorage.getItem("user")),
      });
    }, []);
    
    axios.interceptors.response.use(
      function (response) {
        // any status code that lie within the range of 2XX cause this function
        // to trigger
        return response;
      },
      function (error) {
        // any status codes that falls outside the range of 2xx cause this function
        // to trigger
        let res = error.response;
        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
          return new Promise((resolve, reject) => {
            axios
              .get("/api/logout")
              .then((data) => {
                console.log("/401 error > logout");
                dispatch({ type: "LOGOUT" });
                window.localStorage.removeItem("user");
                router.push("/login");
              })
              .catch((err) => {
                console.log("AXIOS INTERCEPTORS ERR", err);
                reject(error);
              });
          });
        }
        return Promise.reject(error);
      }
    );

    useEffect(() => {
      const getCsrfToken = async () => {
        const { data } = await axios.get("/api/csrf-token");
        // console.log("CSRF", data);
        axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
      };
      getCsrfToken();
    }, []);

    //Provides state and dispatch to the component tree wrapped by this Provider
    return (
      <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    );
};

export { Context, Provider };
