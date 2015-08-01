'use strict';

seatmap.controller('SeatMapController', ['$scope', '$http', '$filter', 'SeatMapService', 
	function ($scope, $http, $filter, SeatMapService) {
		$scope.filterBy = {};
		
		SeatMapService.getStatusList().then(function(result){
			$scope.seatmap = result;
		});

	}]);
