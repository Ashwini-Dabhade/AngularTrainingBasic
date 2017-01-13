 var mainApp = angular.module("mainApp");
         mainApp.controller('registerController', function($scope) {

               $scope.showMe=false;             
               $scope.myFunc = function(){
                 
                       $scope.showMe = !$scope.showMe ;  
                                
               }
            
               /* $scope.myFunc = function(){
                  if(studentForm.$invalid || studentForm.$dirty  || studentForm.firstName.length==0 || studentForm.lastName.length==0 || studentForm.email.length==0 || studentForm.phone.length==0 )   
                 {
                    return false;
                 } 
                 else
                 {
                       $scope.showMe = !$scope.showMe ;  
                 }                
               }
               */

                $scope.reset = function(){
               $scope.firstName = "";
               $scope.lastName = "";
               $scope.email = "";
               $scope.phone = "";
			   $scope.gender = "";
			   $scope.location = "";

               }
            
               $scope.reset();
           

         });