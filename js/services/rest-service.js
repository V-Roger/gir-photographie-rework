'use strict';

angular.module('girphoto')
	.service('restService', ['$http', 'endPoint', '$q', function($http, endPoint, $q ) {
		var root = this;

		this.fetchImages = function(filter, filterParam) {
			return $http.get(endPoint+'posts?filter['+filter+']='+filterParam+'&filter[order]=ASC').then(function(response) {
				return response.data;
			});
		};

		this.fetchText = function(filterParam) {
			return $http.get(endPoint+'pages?filter[pagename]='+filterParam+'&filter[order]=ASC').then(function(response) {
				console.log(response.data);
				return response.data;
			});
		};

		this.fetch = function(filter, filterParam) {
			var promises = [];
			promises.push(root.fetchImages(filter, filterParam));
			promises.push(root.fetchText(filterParam));
			return $q.all(promises).then(function(data) {
				var response = {
					images: data[0],
					text: data[1]
				};
				return response;
			});
		};
	}]);