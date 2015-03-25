'use strict';

angular.module('girphoto')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {

		$scope.loadPhotos = function(cat_id) {
			$http.get('http://localhost/gir_rework/wp-json/posts?filter[category_name]='+cat_id+'&filter[order]=ASC').then(function(response) {
				$scope.photos = response.data;
				console.log($scope.photos);
			});
		};

		$scope.navVisible = false;

		$scope.toggleNav = function() {
			$scope.navVisible = !$scope.navVisible;
		};

	}]);