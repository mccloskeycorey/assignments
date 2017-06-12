var app = angular.module("MyApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "components/home/home.html",
        controller: "HomeCntrl"
    })
    .when("/about", {
        templateUrl: "components/about/about.html",
        controller: "AboutCntrl"
    })
}])
