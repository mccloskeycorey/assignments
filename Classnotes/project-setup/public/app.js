var app = angular.module("MyApp");

app.service("BountService", ["$http", function ($http) {

    this.getBounties = function () {
        return $http.get("/bounties");
    }
}]);