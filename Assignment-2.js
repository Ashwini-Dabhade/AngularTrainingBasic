
  
app.service('calculat',function(){
        this.Square=function(x)
        {
            return x*x
        };
        this.Cube=function(x)
        {
            return x*x*x
        };
        this.Fact=function(x)
        {
        if(x<0)
        {
            return -1;
        } 
        else if(x==0)
        {
            return 1;
        } 
        else
        {
            return (x*this.Fact(x-1));
        }

        }
});


app.controller('factController', function($scope,calculat) {
    $scope.number=5;
    $scope.CalSquare=function()
        {
            $scope.answer=calculat.Square($scope.number);
        }
    $scope.CalCube=function()
        {
            $scope.answer=calculat.Cube($scope.number);
        }
    $scope.CalFactorial=function()
        {
            $scope.answer=calculat.Fact($scope.number);
        }

});