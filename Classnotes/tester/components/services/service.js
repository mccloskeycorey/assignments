var app = angular.module("MyApp");

app.service("PokeService", ["$http", function ($http) {
    this.getPokemon = function () {
        return $http.get("http://pokeapi.co/api/v2/pokemon") // .get() returns a promise
    }
}])
