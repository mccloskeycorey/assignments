var app = angular.module("MyApp")

app.controller("HomeCntrl", ["$scope", "PokeService", function ($scope, PokeService) {
    PokeService.getPokemon()
        .then(function (response) {
            $scope.pokemonList = response.data.results;
            console.log(response)
            console.log(response.data)
            console.log(response.data.results)

        });

}]);
