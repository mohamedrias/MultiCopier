/**
 * User: Rias
 * Date: 2/20/15
 * Time: 8:06 PM
 * Description : Description will be here
 * File name : popup.controller.js
 */

angular.module("multicopier")
	.controller("PopupController", [ "$scope", "MultiCopierDataService", function ($scope, MultiCopierDataService) {
		setInterval(function () {
			$scope.data = MultiCopierDataService.dataStore;
			if (!$scope.$$phase) $scope.$apply();
		}, 1000);
		$scope.clearAll = function() {
			$scope.data = [];
			MultiCopierDataService.clearAll();
			if (!$scope.$$phase) $scope.$apply();
		};
		$scope.refresh = function() {
			$scope.data = MultiCopierDataService.dataStore;
			if (!$scope.$$phase) $scope.$apply();
		};
		$scope.deleteItem = function(item) {
			$scope.data.splice($scope.data.indexOf(item),1);
			MultiCopierDataService.deleteItem(item);
		};
	}])
	.filter('fromNow', function () {
		return function (dateString) {
			if(!dateString) return;
			return moment(dateString).fromNow();
		};
	});