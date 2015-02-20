/**
 * User: Rias
 * Date: 2/20/15
 * Time: 8:01 PM
 * Description : Description will be here
 * File name : multicopier.service.js
 */

angular.module("multicopier.background",[])
	.factory("MultiCopierBackgroundService", function () {

		var multicopierService = {};

		multicopierService.$selector = $("#secret-sauce #copier");

		multicopierService.readLocalStorage = function () {
			return ((localStorage.multicopier) ? JSON.parse(localStorage.multicopier) :  []);
		}


		multicopierService.updateLocalStorage = function() {
			localStorage.setItem("multicopier", JSON.stringify(multicopierService.dataStore));
		}


		multicopierService.dataStore = multicopierService.readLocalStorage();

		multicopierService.onCopy = function () {
			multicopierService.$selector.val('').focus();
			document.execCommand('paste');
			var data = multicopierService.$selector.val();
			if(!data) return;
			var isUnique = multicopierService.checkDuplicate(data);
			if(!isUnique) return;
			console.log(multicopierService.dataStore);
			insertData(multicopierService.$selector.val());
		}

		var insertData = function(data) {
			var tempData = {};
			tempData.date = Date.now();
			tempData.val = data;
			multicopierService.dataStore.push(tempData);
			multicopierService.updateLocalStorage();
		}

		multicopierService.checkDuplicate = function(value) {
			var isUnique = true;
			for(var i = 0, len = multicopierService.dataStore.length; i < len ; i++) {
				if(multicopierService.dataStore[i].val == value) {
					isUnique = false;
					break;
				}
			};
			return isUnique;
		}

		setInterval(function() {
			multicopierService.onCopy();
		},300);

		return multicopierService;
	});