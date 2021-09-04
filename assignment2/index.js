const express = require("express");
const app = express();
const port = 3001;

const fs = require("fs");

app.listen(port, () =>{
    console.log("server started on", port);
});

app.use(express.json());

// app.post("/student/add",(req, res) => {
//     console.log("request", );
//     fs.writeFile("studentList.json", JSON.stringify(req.body), err => {
         
//         // Checking for errors
//         if (err) throw err; 
       
//         console.log("Done writing"); // Success
//         res.status(200).send({"result":"succcess"});
//      });
//     });

app.get("/student/studentList",(req, res) => {
    fs.readFile("studentList.json", (err, data) => {
      
        // Check for errors
        if (err) throw err;
       
        // Converting to JSON
        const studentList = JSON.parse(data);
          
        console.log(studentList); // Print users 
        res.status(200).send(studentList);
    });
 });