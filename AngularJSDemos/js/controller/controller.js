app.controller("friendctrl",function($scope,friendfactory){
    $scope.loadfriend=function(){
   var promise = friendfactory.getFriendJSON();
    for(var i = 1 ; i<=10; i++){
        console.log("Loop "+i);
    }
    function success(data){
        $scope.friendList = data;
    } 
    function error(error){
        $scope.errors = error;
    }    
    promise.then(success,error);    
        //$scope.friendList = friendData;
        }
});