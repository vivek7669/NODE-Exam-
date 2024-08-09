const { getdata, postdata, deletedata, updatedata, registration, getdatabyemail } = require("../controller/user_controller");
const Router = require("express");
const userdatacheck = require("../middleware/user_middleware");
const userrouter = Router();

userrouter.get("/",getdata);
userrouter.post("/",postdata);
userrouter.delete("/:id",deletedata);
userrouter.patch("/:id",updatedata);
userrouter.get("/:email",getdatabyemail);


//todo Registration_data
userrouter.post("/signup",userdatacheck,registration)

module.exports = userrouter;

