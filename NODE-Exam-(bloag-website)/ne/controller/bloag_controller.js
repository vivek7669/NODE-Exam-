const bloag = require("../model/bloag_scema");

const gettask = async (req, res) => {
    let data = await bloag.find();
    res.send(data);
}
const gettaskbyuid = async (req, res) => {
    const {uid} = req.params;
    let data = await bloag.find({uid});
    res.json(data);
}
const posttask = async (req, res) => {
    let data = await bloag.create(req.body);
    res.send(data);
}

module.exports = {gettask, posttask , gettaskbyuid};