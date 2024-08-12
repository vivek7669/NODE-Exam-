const mongoose = require('mongoose');

const bloag_schema = new mongoose.Schema({
    title: String,
    content: String,
    bimg : String,
    author: String,
    createdAt: Date,
}) 

const bloag = mongoose.model("bloag",bloag_schema);

module.exports = bloag;