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
			'errances': {
				'label': 'ERRANCES',
				'state': 'errances',
				'filter': 'page',
				'filterParam': 'errances',
				'children': {
					'please-look-up': {
						'label': 'PLEASE LOOK UP',
						'state': 'errances.lookup',
						'filter': 'category_name',
						'filterParam': 'PLEASE LOOK UP'
					},
					'smog': {
						'label': 'SMOG',
						'state': 'errances.smog',
						'filter': 'category_name',
						'filterParam': 'SMOG'
					}
				}
			},
			'mouvement': {
				'label': 'MOUVEMENT',
				'state': 'mouvement',
				'filter': 'page',
				'filterParam': 'mouvement',
				'children': {
					'eyes-like-crippled': {
						'label': 'EYES LIKE CRIPPLED',
						'state': 'mouvement.eyes-like-crippled',
						'filter': 'category_name',
						'filterParam': 'EYES LIKE CRIPPLED'
					}
				}
			},
			'sonLumiere': {
				'label': 'SON & LUMI\u00C8RE',
				'state': 'sonLumiere',
				'filter': 'page',
				'filterParam': 'sonLumiere',
				'children': {

				}
			}
		};

		var currentItems = {};

		this.getMenuItems = function(navItem) {
			if(navItem && navItem.state !== 'home') {
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