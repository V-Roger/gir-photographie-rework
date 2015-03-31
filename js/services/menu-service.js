'use strict';

angular.module('girphoto')
	.service('menuService', [function() {
		var menuItems = {
			'home': {
				'label': 'ACCUEIL',
				'state': 'home',
				'filter': 'page',
				'filter-param': 'home',
				'children': {
					'wandering': {
						'label': 'WANDERING',
						'state': 'wandering',
						'filter': 'page',
						'filter-param': 'wandering',
						'children': {
							'please-look-up': {
								'label': 'PLEASE LOOK UP',
								'state': 'wandering.lookup',
								'filter': 'category_name',
								'filter-param': 'PLEASE LOOK UP'
							},
							'smog': {
								'label': 'SMOG',
								'state': 'wandering.smog',
								'filter': 'category_name',
								'filter-param': 'SMOG'
							}
						}
					},
					'moving': {
						'label': 'MOVING',
						'state': 'moving',
						'filter': 'page',
						'filter-param': 'moving',
						'children': {
							'eyes-like-crippled': {
								'label': 'EYES LIKE CRIPPLED',
								'state': 'moving.eyes-like-crippled',
								'filter': 'category_name',
								'filter-param': 'EYES LIKE CRIPPLED'
							}
						}
					}
				}
			}	
		};

		this.getMenuItems = function() {
			return menuItems;
		};
	}]);