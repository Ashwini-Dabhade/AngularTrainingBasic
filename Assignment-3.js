
  var mainApp = angular.module("mainApp");    
mainApp.controller('employeeController', function($scope) {
    debugger;
    $scope.names = [
        {id:1,name:'Ashu',technology:'Java'},
        {id:5,name:'Shubham',technology:'DataBase'},
        {id:3, name:'Priya',technology:'MongoDb'},
        {id:4,name:'Komal',technology:'DOT.NET'},
        {id:2,name:'Sheetal',technology:'Oracle'}
       
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});

