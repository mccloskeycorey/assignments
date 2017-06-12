var app = angular.module("MyApp");

app.service("StarWarsPeople", ["$http", function ($http) {
    this.getStarWars = function () {
      return $http.get("http://swapi.co/api/people/")
//        .then(function())
    }
}])
