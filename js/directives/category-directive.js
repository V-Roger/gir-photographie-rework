'use strict';

angular.module('girphoto')
	.directive('category', [function() {
		return {
			restrict: 'E',
			scope: {
				picture: '=',
				description: '='
			},
			templateUrl: 'js/partials/category-directive.html',
			link: function($scope, element) {
			}
		};
	}]);