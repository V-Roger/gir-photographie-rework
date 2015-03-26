'use strict';

angular.module('girphoto')
	.controller('mainController', ['$scope', '$http', 'endPoint', function($scope, $http, endPoint) {

		$scope.loadPhotos = function(cat_id) {
			$http.get(endPoint+'posts?filter[category_name]='+cat_id+'&filter[order]=ASC').then(function(response) {
				$scope.photos = response.data;
				console.log($scope.photos);
			});
		};

		$scope.loadPhotos();

		$scope.navVisible = false;

		$scope.toggleNav = function() {
			$scope.navVisible = !$scope.navVisible;
		};

	}]);