app.controller("friendCtrl",function($scope,friendservice){
    
    $scope.loadFriends=function(){
    //var promise = friendfactory.getFriendJSON();
    var promise = friendservice.object.getFriendJSON();
        console.dir(promise);
    for(var i =1 ; i<=10; i++){
        console.log("Some Logic is Going On...");
    }
    function success(data){
        $scope.result = data;
    }
    function error(error){
        $scope.result = error;
    }
    
    promise.then(success,error);
        }
    
   // var d = $scope;
    //var result = friendfactory.getFriendJSON($scope);
    //$scope.result = "Now Result is "+JSON.stringify(result);
});