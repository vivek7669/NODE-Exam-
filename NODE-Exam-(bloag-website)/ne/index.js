const express = require("express");
const cors = require("cors");
const connectdatabase = require("./config/config");
const userrouter = require("./routes/user_route");
const bloagrouter = require("./routes/bloag_router");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3040;

app.get("/",(req,res)=>{
    res.send("Welcome To My Server.");
});

app.use("/user",userrouter);
app.use("/bloag",bloagrouter);

app.listen(port , async()=>{
    console.log(`Server is running on port ${port}`);
   await connectdatabase();
});

