/*
Model Represents the Logic things 
Model Represents the Logic data
*/

var calculatorObject={
add:function (firstNumber, secondNumber){
    return parseInt(firstNumber) + parseInt(secondNumber);
},

subtract:function (firstNumber, secondNumber){
    return parseInt(firstNumber) - parseInt(secondNumber);
},

multiply:function (firstNumber, secondNumber){
    return parseInt(firstNumber) * parseInt(secondNumber);
},

divide:function (firstNumber, secondNumber){
    return parseInt(firstNumber) / parseInt(secondNumber);
}
}

/*function add(firstNumber, secondNumber){
    return parseInt(firstNumber) + parseInt(secondNumber);
}

function subtract(firstNumber, secondNumber){
    return parseInt(firstNumber) - parseInt(secondNumber);
}

function multiply(firstNumber, secondNumber){
    return parseInt(firstNumber) * parseInt(secondNumber);
}

function divide(firstNumber, secondNumber){
    return parseInt(firstNumber) / parseInt(secondNumber);
}*/