var workoutApp = angular.module('workout',['ngRoute', 'btford.socket-io']);
workoutApp.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: './partials/home.html'
		})
		.when('/welcome', {
			templateUrl: './partials/welcome.html'
		})
		.when('/edit', {
			templateUrl: './partials/edit.html'
		})
		.when('/new', {
			templateUrl: './partials/new.html'
		})
		.when('/detail', {
			templateUrl: './partials/detail.html'
		})
		.when('/create', {
			templateUrl: './partials/create.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})