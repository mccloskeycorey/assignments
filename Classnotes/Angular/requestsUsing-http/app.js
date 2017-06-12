var app = angular.module("myApp", []);

app.controller("mainCntrl", ["$scope", "$http", function ($scope, $http) {

    $scope.submit = function (user) {
        $http.post('/someurl', user).then(function (response) {
                //continue with normal operations
            },
            function (response) {
                //in case there is an error, do this other stuff
            });
    }
}]);


app.service("httpService", ["$http", function ($http) {

});
