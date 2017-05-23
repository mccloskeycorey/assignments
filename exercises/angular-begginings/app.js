var app = angular.module("MyApp", []);

app.controller('TheController', function ($scope) {
    $scope.getName = function (str) {
        return $scope.newName = str;
    };
});
