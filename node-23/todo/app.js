const express = require('express');
const cowsay = require('cowsay');
const {getdata,getdatabyid,gettaskbyuser,credata,updata,dedata} = require("./controller/todo");

const app = express();
const port = process.env.PORT || 8090;
app.use(express.json());

app.get("/todos",getdata);
app.get("/todo/:id",getdatabyid);
app.post("/findbystatus",gettaskbyuser);
app.post("/addtodo",credata);
app.patch("/update/:id",updata);
app.delete("/delete/:id",dedata);

app.listen(port, () => {
    // console.log(`Server is running on port ${port}`);
    console.log(cowsay.say({
        text: `Server is running on port ${port}`,
        e: 'oo',
        T: 'U '
    }));
});