'use strict';

seatmap.factory('SeatMapService', ['$http', '$q',
	function ($http, $q){
		return {
	        getStatusList: function(){
	        	var deferred = $q.defer();
	        	$http.get('/seat-map/api/seat').success(function(result){
	        		deferred.resolve(result);
	        	}).error(function(result){
	        		deferred.reject(result);
	        	});
	        	
	        	return deferred.promise;
	        }
	    };

 	}]);
