var app = angular.module("MyApp", ["ngRoute"]);

app.config([$routeProvider, function($routeProvider) {
	$routeProvider
		.when("/home", {
			templateUrl: "/components/home/home.html",
			controller: "HomeCntrl"
		})
		.when("/about", {
			templateUrl: "/components/about/about.html",
			controller: "AboutCntrl"
		})
		.when("/works", {
			templateUrl: "/components/about/about.html",
			controller: "WorksCntrl"
		})
		.when("/contact", {
			templateUrl: "/components/contact/contact.html",
			controller: "ContactCntrl"
		});
	
}]);
