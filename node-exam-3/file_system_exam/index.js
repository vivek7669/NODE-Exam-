// file_system_exam

const express = require('express');
const fs = require("fs"); 
const app = express();
const port = process.env.PORT || 3040;
app.use(express.json());


app.get("/file",(req,res)=> {
    res.send("Welcome to the world!");
});



app.post("/file/create",(req,res)=>{
    const {filename , content} = req.body;
    if(!filename || !content){
        return res.status(400).json({message: "Filename and content are required"});
    }
    fs.writeFile(filename, content, (err) => {
        if (err) {
            return res.status(500).json({message: "Error creating file"});
        }
    })
    res.send({message: "File created successfully",status:200});
});

app.post("/file/append",(req,res)=>{
    const {filename , content} = req.body;
    if(!filename || !content){
        return res.status(400).json({message: "Filename and content are required"});
    }
    fs.appendFile(filename, content, (err) => {
        if (err) {
            return res.status(500).json({message: "Error appending data into file"});
        }
    })
    res.send({message: "File appending data successfully",status:201});
});

app.post("/file/read",(req,res)=>{
    const {filename} = req.body;
    if(!filename){
        return res.status(400).json({message: "Filename are required"});
    }
     fs.readFile(filename, "utf8", (err,data) => {
        if (err) {
            return res.status(500).json({message: "Error reading data into file"});
        }
        res.send({message: "File reading data successfully",status:201,response : data});
    })
});

app.post("/file/rename",(req,res)=>{
    const {oldfilename , newfilename} = req.body;
    if(!oldfilename || !newfilename){
        return res.status(400).json({message: "Filenames are required"});
    }
     fs.rename(oldfilename, newfilename, (err) => {
        if (err) {
            return res.status(500).json({message: "Error Rename of file"});
        }
        res.send({message: "File Rename successfully",status:201});
    })
});

app.post("/file/delete",(req,res)=>{
    const {filename} = req.body;
    if(!filename){
        return res.status(400).json({message: "Filenames are required"});
    }
     fs.unlink(filename, (err) => {
        if (err) {
            return res.status(500).json({message: "Error Delete of file"});
        }
        res.send({message: "File Delete successfully",status:201});
    })
});

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});