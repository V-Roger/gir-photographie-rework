'use strict';

angular.module('girphoto')
	.directive('girFooter', [function() {
		return {
			restrict: 'A',
			templateUrl: 'js/partials/footer-directive.html',
			link: function($scope, element) {

			}
		};
	}]);