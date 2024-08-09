const mongoose = require('mongoose');
require("dotenv").config();

const connectdatabase = async() =>{
    let db =  await mongoose.connect(process.env.DBURL);
    if(!db){
        console.log('Database connection error');
    }
    console.log("Database connected successfully.");
}

module.exports = connectdatabase;