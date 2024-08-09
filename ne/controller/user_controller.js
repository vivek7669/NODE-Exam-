
const user = require("../model/user_scema");

const getdata = async(req,res) =>{
    let data =await  user.find();
    res.send(data);
}
const getdatabyemail = async(req,res) =>{
    let {email} = req.params;
    let data =await  user.findOne({email});
    res.json(data);
}
const postdata = async(req,res) =>{
    let data = await user.create(req.body);
    res.send(data);
}
const updatedata = async(req,res) =>{
    const {id} =  req.params;
    let data = await  user.findByIdAndUpdate(id , req.body , {new : true} );
    res.send(data);
}
const deletedata = async(req,res) =>{
    const {id} = req.params;
    let data =await  user.findByIdAndDelete(id);
    res.send(data);
}

// registration

const registration = async(req,res) => {
        let data = await user.create(req.body);  l
        res.send(data);
}

module.exports = {getdata, postdata, updatedata, deletedata,registration ,getdatabyemail};