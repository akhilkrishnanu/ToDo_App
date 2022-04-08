var username = document.getElementById("username");
var pwd = document.getElementById("password");
var btn = document.getElementById("mybtn");
var Myform = document.getElementById("Myform");
var error = document.getElementById("error");
var perror = document.getElementById("passwordError");

function validate(callback)
{
    
    if(username.value!="admin")
    {
        error.innerHTML = "Invalid username";
        error.style.color = "red";

        return false;
    }
    else if(pwd.value!=12345)
    {
        error.innerHTML = "Invalid password";
        error.style.color = "red";
        return false;
    }
    else
    {
        error.innerHTML = "";
        callback();
    }
}

function Redirect()
{
    // Myform.action="/main.html";
    Myform.setAttribute("action","todo.html");
}
