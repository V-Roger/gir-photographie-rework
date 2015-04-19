'use strict';

angular.module('girphoto')
	.directive('menu', ['$rootScope', 'menuService', 'restService', '$state', function($rootScope, menuService, restService, $state) {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/menu-directive.html',
			link: function($scope) {
				$scope.menuItems = menuService.getMenuItems();

				$scope.navClickAction = function(navItem) {					
					if(navItem.children) {
						$scope.lastItems = $scope.menuItems;
					}
					$scope.lastState = $state.current.name;
					$scope.menuItems = menuService.getMenuItems(navItem);
				};

				$scope.navBack = function() {
					$scope.menuItems = $scope.lastItems;
					if($scope.menuItems.home) {
						$scope.lastItems = null;
					}
				};
			}
		};
	}]);