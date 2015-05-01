'use strict';

angular.module('girphoto')
	.directive('category', [ 'menuService', '$state', function(menuService, $state) {
		return {
			restrict: 'E',
			scope: {
				picture: '=',
				description: '='
			},
			templateUrl: 'js/partials/category-directive.html',
			link: function($scope, element) {

				$scope.goToStateByName = function(categoryTitle) {
					$state.go(menuService.getItemStateByName(categoryTitle));
				};
			}
		};
	}]);