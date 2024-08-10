// const checkdata = async(email) => {
//     const url =  (`http://localhost:3040/user/${email}`);
//     const req = await fetch(url);
//     const res = await req.json();
//     return res;
// }

let map ;

if(!localStorage.getItem("uid")){
    location.href = "./web/login.html";
}

const mapper = (data) => {
    document.querySelector(".displaydata").innerHTML = "";
    data.map((data)=>{
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${data.tname}</h2>
        <p>${data.tdesc}</p>
        <p>${data.tstaus}</p>
        <button onclick="editdata(${data._id})">Edit</button>
        <button onclick="deletedata(${data._id})">Delete</button>
        `;
        document.querySelector(".displaydata").appendChild(div);
    })
} 

const getdatas = async() => {
    const url =  ("http://localhost:3040/task/");
    const req = await fetch(url);
    const res = await req.json();
    console.log(res);
    mapper(res);
};
getdatas();
const dataposting = async(udata) => {
    console.log(udata);
    const url =  ("http://localhost:3040/task/");
    const options = {
        method : "POST",
        headers : {"Content-type": "application/json"},
        body : JSON.stringify(udata)
    }

    const req = await fetch(url, options);
    const res = await req.json();
} 


const getdata = async(e) => {
    e.preventDefault();
    const userdata = { 
        uid : localStorage.getItem("uid"),
        tname : document.querySelector("#tname").value,
        tdesc : document.querySelector("#tdesc").value,
        tstaus : document.querySelector("#tstaus").value,
    }


//     let data =  await checkdata(userdata.email);
//     if(data){
//         alert("user already Exist");
//     }
//    if(!data){
        dataposting(userdata);
//    }
   setTimeout(()=>{
    map = getdatas()
    mapper(map);
   },1000)
}


const userform = document.querySelector("#userdata");
userform.addEventListener("submit",getdata);