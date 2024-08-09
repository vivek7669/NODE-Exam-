const userdatacheck = (req,res,next) => {
    const {name,email,password} = req.body;
    (name && email && password)?next():res.send("401");
}

module.exports = userdatacheck;