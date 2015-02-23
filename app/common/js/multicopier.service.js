/**
 * User: Rias
 * Date: 2/20/15
 * Time: 8:01 PM
 * Description : Description will be here
 * File name : multicopier.service.js
 */

angular.module("multicopier")
	.factory("MultiCopierDataService", function () {

		var multicopierService = {};


		multicopierService.readLocalStorage = function () {
			return ((localStorage.multicopier) ? JSON.parse(localStorage.multicopier) :  []);
		};


		multicopierService.updateLocalStorage = function() {
			localStorage.setItem("multicopier", JSON.stringify(multicopierService.dataStore));
		};


		multicopierService.dataStore = multicopierService.readLocalStorage();

		multicopierService.clearAll = function() {
			localStorage.setItem("multicopier", JSON.stringify([]));
			multicopierService.dataStore = multicopierService.readLocalStorage();
		};
		multicopierService.deleteItem = function(item) {
				multicopierService.dataStore.splice(multicopierService.dataStore.indexOf(item),1);
				localStorage.setItem("multicopier", JSON.stringify(multicopierService.dataStore));
		};
		setInterval(function() {
			multicopierService.dataStore = multicopierService.readLocalStorage();
		}, 1000);
		return multicopierService;
	});