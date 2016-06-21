// greetfactory is Injected in the Controller
// DI (Depdency Injection)
module.controller("greetctrl",function($scope,greetfactory){
    $scope.greet=function(){
        var fname = $scope.firstName ;
        var lname = $scope.lastName;
        $scope.result = " Welcome  "+ greetfactory.initCap(fname) + " "+ greetfactory.initCap(lname);
    }
    $scope.clear=function(){
        $scope.firstName="";
        $scope.lastName="";
        $scope.result="";
    }
})