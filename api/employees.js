import express from "express";
const router = express.Router();
import {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee }
from "#db/queries/employees"

export default router;

// TODO: this file!

// Get all employees

router.get("/", async(req, res ) => {
  const  employees = await getEmployees();
  res.send(employees)
});


// Create Employee 
router.post("/", async(req, res)=> {

    if(! req.body){
        res.status(400).send("Request body is requier.")
        return;
        }
        const {name, birthday, salary  } = req.body;

        if (name == null || birthday == null  || salary == null){
          res.status(400).send("Missing requier fields.")
          return;
    }
      const employee = await createEmployee({
        name,
        birthday,
        salary, 
        })
        res.status(201).send(employee);
        })


// Get Employee bY ID 
 router.get("/:id", async(req, res)=> { 
  const employee = await getEmployee(req.params.id)

  if(!employee){
    res.status(404).send("Employee does not exist.")
    return;
  }
  res.send(employee)
 });


 //Delete employee 
 router.delete("/:id", async (req, res) => {
  const employee = await deleteEmployee(req.params.id)
   if (!employee) {
   res.status(404).send("Employee does not exist.")
   return;
   }
   res.sendStatus(204)
 })


 // Update Employee 
 router.put("/:id", async(req, res) => {
  if(!req.body){
    res.status(400).send("Request body is not provided")
    return;
  }
   const {name, birthday, salary} = req.body
   if( name == null || birthday == null || salary == null){
    res.status(400).send("Missing a requier fields.")
    return;
   }
   const  employee = await updateEmployee({
    id:req.params.id,
    name,
    birthday,
    salary
   });
   
   if(!employee){
    res.status(404).send("Employee does not exist.")
    return;
   }
   
   res.status(200).send(employee);
 })