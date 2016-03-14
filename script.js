
      var directoryApp = angular.module('directoryApp', []);
      directoryApp.controller('DirectoryCtrl', function ($scope, $http){
        $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members').success(function(data) {
          $scope.directories = data;
          $scope.setClickedRow = function(index){
	      	$scope.selectedRow = index;
         
          }
        });
      });
    