window.onload = function showtodo()
{
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200)
    {
        var Response = JSON.parse(this.responseText);
        var checkid="";

        for(var i=0; i<Response.length; i++)
        {
            const x = document.createElement("input");
            x.setAttribute("type","checkbox");
            x.setAttribute("value",Response[i].title);
            x.setAttribute("id",Response[i].id);
            checkid =Response[i].id;
            x.setAttribute("onchange","init("+checkid+")");
            document.getElementById("todo").appendChild(x);
            const z = document.createElement("label");
            z.innerHTML=`${Response[i].title}`;
            document.getElementById("todo").appendChild(z);
            const newline = document.createElement("br");
            document.getElementById("todo").appendChild(newline);
        }
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
var count = 0;
var idArray=[];


function verify(k)
{
    return new Promise(function(resolve,reject){
        idArray.push(k);
        console.log(k);
        if(idArray.length>=5){
            resolve();
        }
        else{
            reject("not completed");
        }
    })    
    
}

function displaymsg()
{
    setTimeout(function(){
        alert("Congratulations!!! 5 Tasks have been Successfully Completed!");
    }, 500);
    
}
function init(k)
{  
   verify(k)
   .then(displaymsg)
   .catch(function(e){
       console.log(e);
   });
    
}
