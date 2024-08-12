let lfcount = Number(0);


if(localStorage.getItem("lfcount") >= 3){
    alert("limit exceeded");
    location.href = "./signup.html";
}

const checkdata = async (email) => {
    const url = (`http://localhost:3040/user/${email}`);
    const req = await fetch(url);
    const res = await req.json();
    return res;
}

const dataposting = async (udata) => {
    console.log(udata);
    const url = ("http://localhost:3040/user/signup");
    const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(udata)
    }
    
    const req = await fetch(url, options);
    const res = await req.json();
    console.log(res);
}


const getdata = async (e) => {
    e.preventDefault();
    const userdata = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }
    
    
    let data = await checkdata(userdata.email);
    console.log(data);
    if (!data || data == null) {
        alert("user Not Exist");
        alert("Pls Sign_Up.");
    }
    else if (data.password == null || data.password != userdata.password) {
        alert("Pls Enter Valid Data.");
        lfcount++;
        console.log(lfcount);
        
        if(lfcount ==  3){
            alert("limit exceeded");
            location.href = "./signup.html";
            localStorage.setItem("lfcount",lfcount);
            setTimeout(() => {
                localStorage.removeItem("lfcount");
            }, (1*24*60*60*1000));
        }
    }
    else {
        if (data.password == userdata.password) {
            let date = new Date();
            date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
            alert("Login Successfully Completed.");
            // document.cookie = `uid=${data._id}expires=${date.toUTCString()}path="/"`
            localStorage.setItem("uid",data._id)
            location.href = "../index.html"
        }
    }

}

const userform = document.querySelector("#userdata");
userform.addEventListener("submit", getdata);

