// $http is angular define service , which is used to make a ajax call from 
// angular to server.
app.factory("myfactory",function($http){
    var object = {
         
        getJSON:function(scope){
        //var result = "NO RESULT RIGHT NOW ";
        $http.get('http://freegeoip.net/json/flipkart.com').success(function(data){
         scope.info = data;
           // result = data;
            //alert("Here is the result "+result);
         }).error(function(error){
            scope.info = error;
            //result = error;
            //alert("Here is the Error "+result);
         })   
        //alert("I am Going to Return "+result);    
         //return result;
}
    }
    return object;
    });