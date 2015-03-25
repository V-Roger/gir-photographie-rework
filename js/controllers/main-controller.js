'use strict';

angular.module('girphoto')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {

		$http.get('http://localhost/gir_rework/wp-json/posts?filter[category_name]=TEST&filter[order]=ASC').then(function(response) {
			$scope.photos = response.data;
			console.log($scope.photos);
		});

	}]);