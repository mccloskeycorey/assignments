var app = angular.module("wishApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/techIWant", {
            templateUrl: "/components/techIWant/index.html",
            controller: "myTechCntrl"
        })
        .when("/otherTech", {
            templateUrl: "/components/otherTech/index.html"
        })

}]);
