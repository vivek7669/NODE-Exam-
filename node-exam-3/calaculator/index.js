const express = require('express');
const app= express();
const port = process.env.PORT || 3040;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to the world!");
});

app.post("/calc/add",(req,res)=>{
    const {num1, num2} = req.body;
    if(!num1 || !num2) return res.status(404).send({message : "Please enter a number"});
    res.send({result: num1 + num2 , message : "Data Addition Sucessfully Added", status : 201});
});
app.post("/calc/sub",(req,res)=>{
    const {num1, num2} = req.body;
    if(!num1 || !num2) return res.status(404).send({message : "Please enter a number"});
    res.send({result: num1 - num2 , message : "Data substraction Sucessfully Added", status : 201});
});
app.post("/calc/div",(req,res)=>{
    const {num1, num2} = req.body;
    if(!num1 || !num2) return res.status(404).send({message : "Please enter a number"});
    res.send({result: num1 / num2 , message : "Data divsion Sucessfully Added", status : 201});
});
app.post("/calc/mul",(req,res)=>{
    const {num1, num2} = req.body;
    if(!num1 || !num2) return res.status(404).send({message : "Please enter a number"});
    res.send({result: num1 * num2 , message : "Data multiplication Sucessfully Added", status : 201});
});
app.post("/calc/mod",(req,res)=>{
    const {num1, num2} = req.body;
    if(!num1 || !num2) return res.status(404).send({message : "Please enter a number"});
    res.send({result: num1 * num2 / 100, message : "Data moduling Sucessfully Added", status : 201});
});
app.post("/calc/sqrt",(req,res)=>{
    const {num1} = req.body;
    if(!num1) return res.status(404).send({message : "Please enter a number"});
    res.send({result: num1 * num1 , message : "Data sqrting Sucessfully Added", status : 201});
});

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});