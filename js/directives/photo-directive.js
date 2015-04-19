'use strict';

angular.module('girphoto')
	.directive('photo', [function() {
		return {
			restrict: 'E',
			scope: {
				photo: '='
			},
			templateUrl: 'js/partials/photo-directive.html',
			link: function($scope, element) {
				$scope.toggleHighlight = function() {
					element.toggleClass('photo-highlight');
					angular.element(document.querySelector('.content')).toggleClass('photo-highlight');
				};
			}
		};
	}]);