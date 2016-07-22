
var http = require("http");
http.createServer(serveRequest).listen(process.env.PORT || 1234,function(){
    console.log("Server Start...");
});

function serveRequest(request,response){
    console.log("New Request is Coming... "+request.url);
    //response.writeHead(200,"{'content-type':'text/html'}");
    response.writeHead(200,"{'content-type':'application/json'}");
    var userObject = [{id:1001,name:'Ram',salary:49999},{id:1002,name:'Shyam',salary:39999},{id:1003,name:'Mike',salary:29999}];
    response.end(JSON.stringify(userObject));
    //response.write(JSON.stringify(userObject));
    //response.write("<b>Hello </b>");
    //response.end("<br><h1>Hello User</h1>");
}

