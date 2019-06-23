	// create the module and name it myApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function ($routeProvider) {
		$routeProvider

			// route for the menu page
			.when('index', {
				templateUrl: 'index.html',
				controller: 'IndexCtrl'
			})

			// route for the menu page
			.when('/main', {
				templateUrl: 'partials/main.html',
				controller: 'MainCtrl'
			})

			// route for the pelates page
			.when('/pelates', {
				templateUrl: 'partials/pelates.html',
				controller: 'PelatesCtrl'
			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller("IndexCtrl", function ($scope) {
		// create a message to display in our view
		$scope.appDetails = {};

		$scope.appDetails.menu = "Μενού";
	});

	// create the controller and inject Angular's $scope
	myApp.controller("MainCtrl", function ($scope) {
		// create a message to display in our view
		$scope.appDetails = {};
		$scope.appDetails.menu = "Μενού";
	});

	myApp.controller('PelatesCtrl', function ($scope, $http, $log) {

		$scope.appDetails = {};
		$scope.appDetails.pelates = "Επιλέξτε Πελάτη";

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