'use strict';

angular.module('girphoto')
	.controller('mainController', ['$scope', '$http', 'endPoint', function($scope, $http, endPoint) {

		$scope.loadPhotos = function(cat_id) {
			$http.get(endPoint+'posts?filter[category_name]='+cat_id+'&filter[order]=ASC').then(function(response) {
				$scope.data = response.data;
				console.log($scope.data);
			});
		};

		$scope.loadPhotos('EYES LIKE CRIPPLED');

		$scope.navVisible = false;

		$scope.toggleNav = function() {
			$scope.navVisible = !$scope.navVisible;
		};

		$scope.toTrustedHtml = function(html) {

		}

	}])
	.filter('toTrustedHtml', ['$sce', function($sce) {
		return function(item) {
			return $sce.trustAsHtml(item);
		}
	}]);