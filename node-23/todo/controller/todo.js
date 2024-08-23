let db = require('../db/db');
// const tomidlle = require('../middleware/todomiddleware.js');

const getdata = (req,res) => {
    res.send(db);
}

const getdatabyid = (req,res)=>{
    const {id} = req.params;
    let data = db.filter((elm)=>elm.id == id);
    if(data.length==0) {
        res.status(404).send({message:'Task not found'});
    }
    else{
        res.send({data});
    }
}

const gettaskbyuser = (req,res)=>{
    const {iscompleted} = req.body;
    console.log(iscompleted);
    if(iscompleted){
        let data = db.filter((elm)=>elm.iscompleted == iscompleted);
        res.send({data});
    }
    else{
        res.send({message:"Enter the Data."});
    }
}



const credata = (req,res) => {
    
        const {title,iscompleted} = req.body;
        if(!title || title== null || title.length==0 || title=="" || !iscompleted || iscompleted== null || iscompleted.length==0 || iscompleted=="") {
            res.status(404).send({message:'Please enter a title and IsCompleted field.'});
          }
        else{
            db.push({id:Date.now(),title:title,iscompleted:iscompleted});
            res.status(201).send({message:'Task added successfully'});
        }
}

const updata = (req,res) => {

    const {title,iscompleted} = req.body;
    const {id} = req.params;
    console.log(id);

    const index = db.findIndex((elm)=>elm.id == id);
    if(index==-1) {
        res.status(404).send({message:'Task not found'});
    }
    else{
        if(title || iscompleted){
            db[index].title = title;
            db[index].iscompleted = iscompleted;
            res.status(200).send(db[index]);
        }
        else{
            res.status(404).send({message:'Please enter a title or IsCompleted field.'});
        }
    }
}


const dedata = (req,res) => {
    const id = req.params.id;
    res.status(200).send({message:'Task deleted successfully',deletedTodo:db.filter((elm)=>elm.id==id)});
     db = db.filter((elm)=>elm.id!=id);
}

module.exports = {getdata,getdatabyid,gettaskbyuser,credata,updata,dedata};
