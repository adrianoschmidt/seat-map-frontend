'use strict';

/**
 * Main module of the application.
 */
var seatmap = angular.module('seatmap', [ 'ngAnimate', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ngTasty', 'li.datapicker', 'ui.bootstrap', 'pascalprecht.translate', 'angularMoment' ]);

seatmap.config(['$routeProvider','$translateProvider', 
                      function($routeProvider, $translateProvider) {
			$routeProvider
			.when('/', {
				templateUrl : 'views/seatmap.html',
				controller : 'SeatMapController'
			})
			.otherwise({
				redirectTo : '/'
			});

		}]).run(['amMoment',
		        function(amMoment){
			amMoment.changeLocale('es');
		}]);
