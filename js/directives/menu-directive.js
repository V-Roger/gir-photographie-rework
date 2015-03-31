'use strict';

angular.module('girphoto')
	.directive('menu', ['menuService', function(menuService) {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/menu-directive.html',
			controller: function($scope) {
				$scope.menuItems = menuService.getMenuItems().home.children.wandering.children;
				console.log($scope.menuItems);
			}
		};
	}]);