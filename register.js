const usernameR = document.getElementById("usernameR");
const email = document.getElementById("email");
const passwordR = document.getElementById("passwordR");
const passwordRR = document.getElementById("passwordRR");
const registerBtn = document.getElementById("registerBtn");

let usernames = JSON.parse(localStorage.getItem("usernames"));
let passwords = JSON.parse(localStorage.getItem("passwords"));

if(usernames == null) usernames = [];
if(passwords == null) passwords = [];

registerBtn.onclick = function(){
    if(usernameR.value!=="" && email.value.includes("@") && passwordR.value===passwordRR.value && passwordR.value!==""){
        usernames.push(usernameR.value);
        passwords.push(passwordR.value);
        localStorage.setItem("usernames",JSON.stringify(usernames));
        localStorage.setItem("passwords",JSON.stringify(passwords));
        window.location.href = "index.html";
    }
    else{
        document.getElementById("error").style.opacity = 1;
        setTimeout(() => {
            document.getElementById("error").style.opacity = 0;
        }, 2000)
    }
}