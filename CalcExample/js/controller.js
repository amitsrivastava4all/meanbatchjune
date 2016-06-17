/*
Controller is a Glue B/w View and Model

*/

window.addEventListener("DOMContentLoaded",init);
function init(){
   var bt =  document.getElementsByTagName("button");
    for(var i = 0 ; i<bt.length; i++){
        bt[i].addEventListener("click",doOperation);
    }
}

function doOperation(){
            //alert("Do Operation Called..."+this.innerHTML);
    //var operation = this.innerHTML;
    //var operation = event.srcElement.innerHTML;
    var operation = this.getAttribute("data-operation");
    //var operation = event.srcElement.getAttribute("data-operation");
    var result = 0;
    var firstNumber = document.getElementById("firstNo").value;
    var secondNumber = document.getElementById("secondNo").value;
    result = calculatorObject[operation](firstNumber,secondNumber);
    /*if(operation==='+'){
        result = calculatorObject.add(firstNumber,secondNumber);
        //result = add(firstNumber,secondNumber);
    }
    else
    if(operation==='-'){
       result = calculatorObject.subtract(firstNumber,secondNumber);
        // result = subtract(firstNumber,secondNumber);
    } 
    else
    if(operation==='*'){
        result = multiply(firstNumber,secondNumber);
    }
    else
    if(operation==='/'){
        result = divide(firstNumber,secondNumber);
    }*/
    document.getElementById("result").innerHTML = result;
}
                               
                               