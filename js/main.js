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
					'type': 'category'
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
			.state('errances.soudan', {
				url: '/soudan',
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'ERRANCES/SOUDAN'
				}
			})
			.state('errances.culDeSac', {
				url: '/cul-de-sac',
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'ERRANCES/CUL-DE-SAC'
				}
			})
			.state('essais', {
				url: '/essais',
				templateUrl: 'js/partials/category.html',
				data: {
					'filter': 'page',
					'filterParam': 'essais',
					'type': 'category'
				}
			})
			.state('essais.codex25', {
				data: {
					'url': 'http://www.gir-photographie.com/galleries/codex25/codex25.html',
					'type': 'redirect'
				}
			})
			.state('essais.codex10', {
				data: {
					'url': 'http://www.gir-photographie.com/galleries/codex10/codex10.html',
					'type': 'redirect'
				}
			})
			.state('mouvement', {
				url: '/mouvement',
				templateUrl: 'js/partials/category.html',
				data: {
					'filter': 'page',
					'filterParam': 'mouvement',
					'type': 'category'
				}
			})
			.state('mouvement.eyes-like-crippled', {
				url: '/eyes-like-crippled',
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'MOUVEMENT/EYES LIKE CRIPPLED'
				}
			})
			.state('mouvement.long-fight', {
				url: '/bandeira-long-fight',
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'MOUVEMENT/LONG FIGHT'
				}
			})
			.state('still', {
				url: '/immobiles',
				templateUrl: 'js/partials/category.html',
				data: {
					'filter': 'page',
					'filterParam': 'still',
					'type': 'category'
				}
			})
			.state('still.geometry', {
				url: '/geometrie',
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'STILL/GEOMETRY'
				}
			})
			.state('still.visages', {
				url: '/visages',
				templateUrl: 'js/partials/gallery.html',
				data: {
					'filter': 'category_name',
					'filterParam': 'STILL/VISAGES'
				}
			});
	})
	.value('endPoint', 'http://dev.gir-photographie.com/wp-json/');
