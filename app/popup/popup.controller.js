/**
 * User: Rias
 * Date: 2/20/15
 * Time: 8:06 PM
 * Description : Description will be here
 * File name : popup.controller.js
 */

angular.module("multicopier")
.controller("PopupController", [ "$scope", "MultiCopierDataService", function($scope, MultiCopierDataService) {
		$scope.data = MultiCopierDataService.dataStore;
	}]);