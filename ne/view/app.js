import { navbar1 } from "../components/navbar.js";
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

let navb = document.querySelector(".navbar_dis");
navb.innerHTML = navbar1();
document.querySelector(".Home").classList.add("text-muted");
document.querySelector(".Sign_Up").classList.remove("text-muted");
document.querySelector(".Sign_In").classList.remove("text-muted");

const mapper = (data) => {
    document.querySelector(".displaydata").innerHTML = "";
    data.map((elm)=>{
        let a = elm.createdAt;
        let date = new Date(a);
        // const div = document.createElement("div");
        // div.innerHTML = `
        // <h2>${data.title}</h2>
        // <p>${data.content}</p>
        // <p>${data.author}</p>
        // <img src=${data.bimg} width="190" />
        //  <p>${date.toLocaleString()}</p>
        // `;
        // document.querySelector(".displaydata").appendChild(div);


        let innerdiv = document.createElement("div");
        innerdiv.classList.add("card",'d-flex','flex-column','justify-content-center' ,"mb-4","px-3","pt-3");
        let cardtitle  = document.createElement("h5");
        cardtitle.classList.add("card-title");
        cardtitle.innerHTML = "<span class='h4 text-muted'>BloagTitle : </span>"+ elm.title; 
        let bposcontant = document.createElement("div");
        bposcontant.classList.add("d-flex","justify-content-around","align-items-center",'mb-2'); 
        let bposter = document.createElement("img");
        bposter.classList.add("img-fluid","rounded","mr-3");
        bposter.src = elm.bimg;
        bposter.setAttribute("width",100);
        bposcontant.append(bposter);
        let bdesc = document.createElement("p");
        bdesc.classList.add("card-text");
        bdesc.textContent = elm.content;
        bposcontant.append(bdesc);
        let cfooter = document.createElement("div");
        cfooter.classList.add("d-flex","justify-content-between",'mb-2'); 
        let bauth = document.createElement("h6");
        bauth.classList.add("card-text","mt-3",);
        bauth.innerHTML = "<span class='h6 text-muted'>Author : </span><b>"+ elm.author+"</b>";
        cfooter.append(bauth);
        let bdate = document.createElement("span");
        bdate.classList.add("card-text","mt-3","h6");
        bdate.innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        cfooter.append(bdate);
        innerdiv.append(cardtitle,bposcontant,cfooter);
        document.querySelector(".displaydata").append(innerdiv);
    })
} 

const getdatas = async() => {
    const url =  (`http://localhost:3040/bloag/${localStorage.getItem("uid")}`);
    const req = await fetch(url);
    const res = await req.json();
    console.log(res);
    mapper(res);
};
getdatas();
const dataposting = async(udata) => {
    console.log(udata);
    const url =  ("http://localhost:3040/bloag/");
    const options = {
        method : "POST",
        headers : {"Content-type": "application/json"},
        body : JSON.stringify(udata)
    }

    const req = await fetch(url, options);
    const res = await req.json();
} 


const checkdata = async(title) => {
    const url =  (`http://localhost:3040/bloag/${localStorage.getItem("uid")}`);
    const req = await fetch(url);
    const res = await req.json();
    console.log(res);
    console.log(title);
    let a = res.filter(elm => elm.title.includes(title));
    if(a[0]){
        return true;
    }
    else{
        return false;
    }
}

const getdata = async(e) => {
    e.preventDefault();
    const userdata = { 
        uid : localStorage.getItem("uid"),
        title : document.querySelector("#bname").value,
        content : document.querySelector("#bcontent").value,
        bimg : document.querySelector("#bpost").value,
        author : document.querySelector("#bauth").value,
        createdAt : document.querySelector("#bdate").value,
    }


    let a = await checkdata(userdata.title);
    if(a){
        alert("Bloag already Exist");
    }else{
        dataposting(userdata);
    }

   setTimeout(()=>{
     getdatas()
   },1000)
}


const userform = document.querySelector("#userdata");
userform.addEventListener("submit",getdata);