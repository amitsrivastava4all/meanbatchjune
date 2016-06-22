app.controller("greetctrl",function($scope,friendfactory){
    $scope.friends  = friendfactory.getFriends();
})