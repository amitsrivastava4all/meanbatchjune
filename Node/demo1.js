var fs = require("fs");
//console.log(fs);
console.log("I am Going to Block the code");
//var content = fs.readFileSync("demo1.js");
fs.readFile("demo1.js",function(err,content){
   console.log("Content "+content); 
});
//console.log("Content is "+content);
console.log("*************** LOGIC ********");
console.log("Hello Node");
var mymodule = require("./calc.js");
//console.log(typeof mymodule);
console.log(mymodule.add(100,200));
console.log(mymodule.subtract(100,200));

//var result = mymodule.add(10,20);
//console.log("Result is ",result);
//console.log("Subtract is ",mymodule.subtract(100,200));