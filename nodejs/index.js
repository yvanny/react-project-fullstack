
const express = require("express") // add require
const app = express(); //extend

app.use(express.json()) //allow node app get data in JSON format

const employee = require("./src/route/employee.route") // import
employee(app) // call function employee

app.listen(8080,()=>{
    console.log("http://localhost:8080")
})