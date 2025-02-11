const usernameL = document.getElementById("usernameL");
const passwordL = document.getElementById("passwordL")
const loginBtn = document.getElementById("loginBtn");

let usernames = JSON.parse(localStorage.getItem("usernames"));
let passwords = JSON.parse(localStorage.getItem("passwords"));

if(usernames == null) usernames = [];
if(passwords == null) passwords = [];

let correctCr = false;

loginBtn.onclick = function(){
    for(let i=0;i<usernames.length;i++){
        if(usernameL.value===usernames[i] && passwordL.value===passwords[i]) correctCr = true;
    }
    if(correctCr) window.location.href = "main.html";
    else{
        document.getElementById("error").style.opacity = 1;
        setTimeout(() => {
            document.getElementById("error").style.opacity = 0;
        }, 2000)
    }
}

