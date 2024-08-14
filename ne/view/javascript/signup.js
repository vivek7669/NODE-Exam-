import { navbar } from "../../components/navbar.js";



let navb = document.querySelector(".navbar_dis");
navb.innerHTML = navbar();
document.querySelector(".Sign_Up").classList.add("text-muted");
document.querySelector(".Home").classList.remove("text-muted");
document.querySelector(".Sign_In").classList.remove("text-muted");

const checkdata = async(email) => {
    const url =  (`http://localhost:3040/user/${email}`);
    const req = await fetch(url);
    const res = await req.json();
    return res;
}

const dataposting = async(udata) => {
    console.log(udata);
    const url =  ("http://localhost:3040/user/signup");
    const options = {
        method : "POST",
        headers : {"Content-type": "application/json"},
        body : JSON.stringify(udata)
    }

    const req = await fetch(url, options);
    const res = await req.json();
    console.log(res);
    if(res){
        location.href = "./login.html"
    }
} 


const getdata = async(e) => {
    e.preventDefault();
    const userdata = { 
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value,
    }


    let data =  await checkdata(userdata.email);
    if(data){
        alert("user already Exist");
    }
   if(!data){
        dataposting(userdata);
   }
    

}

const userform = document.querySelector("#userdata");
userform.addEventListener("submit",getdata);