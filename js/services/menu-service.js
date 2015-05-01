'use strict';

angular.module('girphoto')
	.service('menuService', ['$filter', function($filter) {
		var menuItems = {
			'accueil': {
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
					},
					'soudan': {
						'label': '\u00C0 50mm DU SOUDAN',
						'state': 'errances.soudan',
						'filter': 'category_name',
						'filterParam': 'SOUDAN'
					},
					'culDeSac': {
						'label': 'CUL-DE-SAC',
						'state': 'errances.culDeSac',
						'filter': 'category_name',
						'filterParam': 'CUL-DE-SAC'
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
					},
					'long-fight': {
						'label': 'IT\'S A LONG FIGHT',
						'state': 'mouvement.long-fight',
						'filter': 'category_name',
						'filterParam': 'LONG FIGHT'
					}
				}
			},
			'essais': {
				'label': 'ESSAIS (PHOTO)GRAPHIQUES',
				'state': 'essais',
				'filter': 'page',
				'filterParam': 'ESSAIS',
				'children': {
					'codex10': {
						'label': 'CODEX \u250A10\u250A',
						'state': 'essais.codex10',
						'filter': 'category_name',
						'filterParam': 'CODEX10'
					},
					'codex25': {
						'label': 'CODEX \u250A25\u250A',
						'state': 'essais.codex25',
						'filter': 'category_name',
						'filterParam': 'CODEX25'
					}	
				}
			},
			'immobile': {
				'label': 'IMMOBILES',
				'state': 'still',
				'filter': 'page',
				'filterParam': 'still',
				'children': {
					'geometry': {
						'label': 'G\u00C9OM\u00C9TRIE',
						'state': 'still.geometry',
						'filter': 'category_name',
						'filterParam': 'GÉOMÉTRIE'
					},
					'visages': {
						'label': 'VISAGES',
						'state': 'still.visages',
						'filter': 'category_name',
						'filterParam': 'VISAGES'
					}
				}			
			}
		};

		var currentItems = {};

		this.getItemStateByName = function(itemName) {
			return($filter('itemStateByName')(menuItems, itemName)[0]);
		};

		this.getStateMenuItems = function(state) {
			return $filter('itemByState')(menuItems, state);
		};

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
	}])
	.filter('itemStateByName', [function() {
		return function(items, name) {
			var filtered = [];
			angular.forEach(items, function(item) {
				if(item.children) {
					angular.forEach(item.children, function(subItem) {
						if(subItem.label == name || subItem.filterParam == name) {
							filtered.push(subItem.state);
						}
					});
				} else {
					if(item.label == name || item.filterParam == name) {
						filtered.push(item.state);
					}
				}
			});
			return filtered;
		};
	}])
	.filter('itemByState', [function() {
		return function(items, state) {
			var filtered = [];
			angular.forEach(items, function(item) {
				if(item.children) {
					angular.forEach(item.children, function(subItem) {
						if(subItem.state == state) {
							filtered.push(subItem);
						}
					});
				}
				if(item.state == state || state == 'home') {
					filtered.push(item);
				}
			});
			return filtered;
		};
	}]);