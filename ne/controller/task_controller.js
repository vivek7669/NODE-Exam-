const task = require("../model/task_scema");

const gettask = async (req, res) => {
    let data = await task.find();
    res.send(data);
}
const gettaskbyuid = async (req, res) => {
    const {uid} = req.params;
    let data = await task.find({uid});
    res.json(data);
}
const posttask = async (req, res) => {
    let data = await task.create(req.body);
    res.send(data);
}

module.exports = {gettask, posttask , gettaskbyuid};