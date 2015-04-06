'use strict';

angular.module('girphoto')
	.controller('mainController', ['$scope', '$http', 'restService', function($scope, $http, restService) {

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$scope.loading = true;
			restService.fetch(toState.data.filter, toState.data.filterParam).then(function(data) {
				$scope.text = data.text;
				$scope.data = data.images;
				$scope.loading = false;
			});
		});

		$scope.navVisible = false;

		$scope.toggleNav = function() {
			$scope.navVisible = !$scope.navVisible;
		};

	}])
	.filter('toTrustedHtml', ['$sce', function($sce) {
		return function(item) {
			return $sce.trustAsHtml(item);
		};
	}]);