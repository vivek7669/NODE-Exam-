const mongoose = require('mongoose');

const task_schema = new mongoose.Schema({
    uid: String,
    tname: String,
    tdesc: String,
    tstaus: String
}) 

const task = mongoose.model("task",task_schema);

module.exports = task;