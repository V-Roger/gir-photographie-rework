'use strict';

angular.module('girphoto')
	.directive('menu', ['$rootScope', 'menuService', 'restService', '$state', function($rootScope, menuService, restService, $state) {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/menu-directive.html',
			link: function($scope) {
				$scope.menuItems = menuService.getMenuItems();

				$scope.parentState = null;

				$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
					if(toState.data.type === 'redirect') {
						window.location.href = toState.data.url;
					}
					var stateName = toState.name.indexOf('.') !== -1 ? toState.name.split('.')[0] : toState.name;
					var menuItems = menuService.getStateMenuItems(stateName);
					$scope.menuItems = menuItems[0].children ? menuItems[0].children : menuItems;
					if(toState.name !== 'home') $scope.parentState = 'home';
				});

				$scope.navBack = function() {
					$state.go($scope.parentState);
				};
			}
		};
	}]);