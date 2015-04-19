'use strict';

angular.module('girphoto')
	.controller('mainController', ['$scope', '$http', 'restService', function($scope, $http, restService) {

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$scope.loading = true;
			restService.fetch(toState.data.filter, toState.data.filterParam).then(function(data) {
				$scope.text = data.text;
				$scope.data = data.images;
				if(toState.data.type === 'category') {
					restService.fetchChildren($scope.text[0].ID).then(function(data) {
						$scope.galleries = data;
						angular.forEach($scope.galleries, function(gallery) {
							restService.fetchGalleryDescription(gallery.featured_image.ID).then(function(data) {
								gallery.description = data;
							});
						});
						console.log($scope.galleries);
						$scope.loading = false;
					});
				}
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