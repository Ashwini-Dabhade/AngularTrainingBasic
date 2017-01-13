
var app = angular.module('mainApp');
app.controller('infoController', ['$scope', invoice]);

function invoice($scope) {
    $scope.items = [{
        select:false,
        name: 'pen',
        quantity: 2,
        price: 10
    },
    
     {
        select:false,
        name: 'book',
        quantity: 2,
        price: 40
    },
    
     {
        select:false,
        name: 'notebook',
        quantity: 1,
        price: 20
    }];
    
    $scope.invoiceCount = 0;
    $scope.invoiceTotal = 0;
    
    $scope.setTotals = function(item){
        if (item.select){
            item.total = item.quantity * item.price;
            $scope.invoiceCount += item.quantity;
            $scope.invoiceTotal += item.total;
        }
        else
        {
            $scope.invoiceTotal -= item.total;
            item.total = 0;
            $scope.invoiceCount -= item.quantity;
       }
        
    }
  //  $scope.setTotals();
}

