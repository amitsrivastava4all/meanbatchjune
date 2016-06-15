window.addEventListener("DOMContentLoaded",init);
//window.addEventListener("load",lazy);
function lazy(){
    alert("Lazy call");
}
//window.addEventListener("load",init);
function init(){
    
alert("I am Here");
document.getElementById("greetBt").addEventListener("click",greet);
}
    function greet(){
            var firstName = document.getElementById("firstName").value;
            document.getElementById("msg").innerHTML="Welcome "+firstName;
        }