import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();
import csrf from "csurf";
import cookieParser from "cookie-parser";

const csrfProtection = csrf({ cookie: true });

// create express app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

// apply middlewares
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

/*
app.use((req, res, next) => {
    console.log("This is my middleware");
    next();
});
*/

// route
/*
app.get("/", (req, res) => {
  res.send("you hit server endpoint");
});
*/

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// csrf
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
