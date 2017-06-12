var app = angular.module("MyApp", []);
app.controller("MainController", [$scope, function ($scope) {
    $scope.allen = {
            name: "Allen Woody",
            email: "ewodfhfas@gmail.com"
        },
        $scope.bif = {
            name: "Bif",
            email: "backtothefuture@yahoo.com"
        }
}]);
app.directive("myInfo", function () {

    return
})
