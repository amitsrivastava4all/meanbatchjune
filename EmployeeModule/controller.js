app.controller("empctrl",function($scope,empfactory){
    $scope.rateEmployee=function(){
        empfactory.addNewComment($scope.name,$scope.desc,$scope.rating);
        $scope.commentList = empfactory.commentList;
        $scope.giveData = function(commentObject){
        $scope.name = commentObject.name;
        $scope.desc = commentObject.desc;
        $scope.rating = commentObject.rating;    
        }
    }
});