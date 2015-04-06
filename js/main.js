'use strict';

angular.module('girphoto', ['ngSanitize', 'ui.router', 'ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('home');

		$stateProvider
			.state('home', {
				url: '',
				data: {
					'filter': 'page',
					'filterParam': 'home',
				}
			})
			.state('wandering', {
				url: '/wandering',
				data: {
					'filter': 'page',
					'filterParam': 'wandering',
				}
			})
			.state('wandering.lookup', {
				url: '/please-look-up', 
				data: {
					'filter': 'category_name',
					'filterParam': 'PLEASE LOOK UP'
				}
			})
			.state('wandering.smog', {
				url: '/smog',
				data: {
					'filter': 'category_name',
					'filterParam': 'SMOG'
				}
			})
			.state('moving', {
				url: '/moving',
				data: {
					'filter': 'page',
					'filterParam': 'moving',
				}
			})
			.state('moving.eyes-like-crippled', {
				url: '/eyes-like-crippled',
				data: {
					'filter': 'category_name',
					'filterParam': 'EYES LIKE CRIPPLED'
				}
			});
	})
	.value('endPoint', 'http://dev.gir-photographie.com/wp-json/');
