import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";



const Register = () => {
    
    const [name, setName] = useState("Dip Guha")
    const [email, setEmail] = useState("dip@gmail.com")
    const [password, setPassword] = useState("password")
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        //console.table({name, email, password});
        try {
          const { data } = await axios.post(`http://localhost:8000/api/register`, {
            name,
            email,
            password,
          });
          //console.log("REGISTER RESPONSE", data); 
          toast("Registration successful. Please login.");
        } catch (err) {
          toast(err.response.data);
        }
    };
    
    return (
      <>
        <h1 className="jumbotron text-center bg-primary square">Register Details</h1>
        
        <div className="container col-md-4 offset-md-4 pb-5">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-control mb-4 p-4" 
                    value={name} 
                    onChange={ (e) => setName(e.target.value) }
                    placeholder="Enter Name"
                    required
                />

                <input 
                    type="text" 
                    className="form-control mb-4 p-4" 
                    value={email} 
                    onChange={ (e) => setEmail(e.target.value) }
                    placeholder="Enter Email"
                    required
                />

                <input 
                    type="text" 
                    className="form-control mb-4 p-4" 
                    value={password} 
                    onChange={ (e) => setPassword(e.target.value) }
                    placeholder="Enter Password"
                    required
                />

                <button 
                    type="submit" className="btn btn-block btn-primary">Submit
                </button> 
            </form>
        </div> 
      </>
    );
  }
  
export default Register;
  