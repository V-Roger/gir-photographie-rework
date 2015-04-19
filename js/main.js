'use strict';

angular.module('girphoto', ['ngSanitize', 'ui.router', 'ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('');

		$stateProvider
			.state('home', {
				url: '',
				data: {
					'filter': 'page',
					'filterParam': 'home',
				}
			})
			.state('errances', {
				url: '/errances',
				templateUrl: 'js/partials/category.html',
				data: {
					'filter': 'page',
					'filterParam': 'errances',
				}
			})
			.state('errances.lookup', {
				url: '/please-look-up', 
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'ERRANCES/PLEASE LOOK UP'
				}
			})
			.state('errances.smog', {
				url: '/smog',
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'ERRANCES/SMOG'
				}
			})
			.state('mouvement', {
				url: '/mouvement',
				data: {
					'filter': 'page',
					'filterParam': 'mouvement',
				}
			})
			.state('mouvement.eyes-like-crippled', {
				url: '/eyes-like-crippled',
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'MOUVEMENT/EYES LIKE CRIPPLED'
				}
			});
	})
	.value('endPoint', 'http://dev.gir-photographie.com/wp-json/');
