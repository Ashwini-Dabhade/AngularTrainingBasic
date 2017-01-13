 
         var mainApp = angular.module("mainApp");    
         mainApp.controller('detailsController', function($scope) {
             debugger;
            $scope.student = {
               firstName: "Ashwini",
               lastName: "Dabhade",
               fees:1000,
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         });
    