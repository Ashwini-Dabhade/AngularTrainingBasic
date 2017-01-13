
var app = angular.module("mainApp", ["ngRoute"]);
    app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/Assignment-1", {
        templateUrl : "Assignment-1.html"
       
    })
     .when("/Assignment-2", {
         templateUrl : "Assignment-2.html",
          controller : "factController"
     })
    .when("/Assignment-3", {
        templateUrl : "Assignment-3.html",
        controller : "employeeController"
    })
    .when("/Assignment-4", {
        templateUrl : "Assignment-4.html",
        controller : "detailsController"
    })
    .when("/Assignment-5", {
         templateUrl : "Assignment-5.html",
        controller : "registerController"
     })
     .when("/Assignment-6", {
         templateUrl : "Assignment-6.html",
         controller : "infoController"
     });
    }]);
