angular.module("omdb", [])

    .controller("otree", function ($scope, $http) {
        $scope.queryResult = [];
        $scope.oquery = function() {
           var oinput = document.getElementById('oinput');
           oinput.classList.add("oiactive");
           var movie = $scope.query.replace(' ','+');
           $http.get('http://www.omdbapi.com/?t='+movie)
            .then(function (result) {
                if(!result){
                    $scope.queryResult =''
                } else{
                    $scope.queryResult = result.data;
                }
            });
        }
        
    })  