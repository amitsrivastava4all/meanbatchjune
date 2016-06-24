app.controller("ctrl",function($scope,myfactory){
//$scope.info = myfactory.getJSON();
    myfactory.getJSON($scope);
});