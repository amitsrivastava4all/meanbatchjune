app.service("friendservice",function($http,$q,url)){
//app.factory("friendfactory",function($http,$q,url){
   //Factory will talk to server
    //var object = {
      this.object = {  
        //getFriendJSON:function(scope){
        getFriendJSON:function(){  
        var defered =$q.defer();
            //var result = {"name":"N/A","phone":"N/A","address":"N/A"};
            //$http.get('server/friends.json').success(function(data){
            $http.get(url).success(function(data){
                result = data;
                //alert("Server is HIT "+result);
                defered.resolve(data);
                //scope.result = "Server Data is "+JSON.stringify(data);
            }).error(function(error){
                result = error;
                defered.reject(error);
                //alert("Server is MISS "+error);
                //scope.result = "Server Error is "+error;
            });
            return defered.promise;
            //return defered.promise;
            //return result;
        }
    }
    //return object;
});