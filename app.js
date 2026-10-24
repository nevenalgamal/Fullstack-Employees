import express from "express";
const app = express();
import employeesRouter from "./api/employees.js";
export default app;

// TODO: this file!


app.use(express.json());

app.get("/", (req, res )=>{
    res.send("Welcome to the Fullstack Employees API.")
});

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});
