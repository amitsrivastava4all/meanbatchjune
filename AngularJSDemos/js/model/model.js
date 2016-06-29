app.factory("friendfactory",function($http,$q){
    var object = {
        getFriendJSON : function(){
            // it will give the fake object
            var defered = $q.defer();
            //var friendData = {"name":"N/A","phone":"N/A","address":"N/A"};
            // Asynch Call
            $http.get('server/friend.json').success(function(data){
              defered.resolve(data);
                //  alert("SUCCESS "+data);
             //friendData = data;
         }).error(function(error){
                defered.reject(error);
                //alert("ERROR "+error);
             //friendData = error;
         }) 
            return defered.promise;
            //alert("I am going to return "+friendData);
            //return friendData;
        }
    }
    return object;
});