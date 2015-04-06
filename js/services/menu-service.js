'use strict';

angular.module('girphoto')
	.service('menuService', ['$filter', function($filter) {
		var menuItems = {
			'home': {
				'label': 'ACCUEIL',
				'state': 'home',
				'filter': 'page',
				'filterParam': 'home',
			},
			'wandering': {
				'label': 'WANDERING',
				'state': 'wandering',
				'filter': 'page',
				'filterParam': 'wandering',
				'children': {
					'please-look-up': {
						'label': 'PLEASE LOOK UP',
						'state': 'wandering.lookup',
						'filter': 'category_name',
						'filterParam': 'PLEASE LOOK UP'
					},
					'smog': {
						'label': 'SMOG',
						'state': 'wandering.smog',
						'filter': 'category_name',
						'filterParam': 'SMOG'
					}
				}
			},
			'moving': {
				'label': 'MOVING',
				'state': 'moving',
				'filter': 'page',
				'filterParam': 'moving',
				'children': {
					'eyes-like-crippled': {
						'label': 'EYES LIKE CRIPPLED',
						'state': 'moving.eyes-like-crippled',
						'filter': 'category_name',
						'filterParam': 'EYES LIKE CRIPPLED'
					}
				}
			}	
		};

		var currentItems = {};

		this.getMenuItems = function(navItem) {
			if(navItem) {
				if(navItem.children) {
					currentItems = navItem.children;
					return navItem.children;
				} else {
					return currentItems;
				}
			} else {
				currentItems = menuItems;
				return menuItems;
			}
		};
	}]);