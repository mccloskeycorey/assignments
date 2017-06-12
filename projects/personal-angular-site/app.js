var app = angular.module("MyApp", ["ngRoute"]);

app = app.config([$routeProvider, function($routeProvider){
   $routeProvider
   .when("/character", {
       templateUrl: "components/character/character.html",
       controller: "charactersCntrl"
   })
    .when("/planets", {
       templateUrl: "components/planets/planet.html",
       controller: "planetsCntrl"
   })
    .when("/home", {
       templateUrl: "components/home/home.index.html"
   })
       .when("/")
}]);
