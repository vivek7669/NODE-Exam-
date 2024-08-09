const  mongoose = require("mongoose");

let user_scema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});

let user = mongoose.model("user",user_scema);
module.exports = user;