'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('LoginCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    $scope.login = function() {
        Todo.startSession({
            email: $scope.email,
            password: $scope.password,
            success: function(user) {
                $rootScope.user = user; 
                $location.path('/lists');
                $scope.$apply();
            },
            error: function(xhr) {
                alert(xhr.responseJSON.error);
            }
        });
    }

}])
.controller('RegisterCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    $scope.register = function() {
    	if ($scope.password1 != $scope.password2){
    		alert('Passwords do not match');
    		return;
    	}

        Todo.createUser({
            email: $scope.email,
            password: $scope.password1,
            success: function(user) {
                $rootScope.user = user; 
                $location.path('/lists');
                $scope.$apply();
            },
            error: function(xhr) {
               alert([$scope.email,xhr.responseJSON.email[0]].join(' '));
            }
        });
    }
}])
.controller('ListsCtrl', ['$rootScope', function($rootScope){
	
}]);