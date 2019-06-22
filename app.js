	// create the module and name it myApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function ($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/pelates', {
				templateUrl: 'partials/pelates.html',
				controller: 'PelatesCtrl'
			})

			// route for the about page
			.when('/main', {
				templateUrl: 'partials/main.html',
				controller: 'HeaderCtrl'
			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller("HeaderCtrl", function ($scope) {
		// create a message to display in our view
		$scope.appDetails = {};
		$scope.appDetails.title = "Μενού";
	});

	myApp.controller('PelatesCtrl', function ($scope, $http, $log) {

		$scope.appDetails = {};
		$scope.appDetails.title = "Επιλέξτε Πελάτη";

		var successCallBack = function (response) {

			var pelatesArray = response.data.Customers;

			for (var i = 0; i < pelatesArray.length; i++) {

				$scope.pelates = response.data.Customers;

			};

		};

		var errorCallBack = function (response) {
			$scope.error = response.data;
		};

		$http.get("http://northwind.servicestack.net/customers.json").then(successCallBack, errorCallBack);
	});