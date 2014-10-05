'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('LoginCtrl', ['$scope', function($scope) {
    $scope.login = function() {
        Todo.startSession({
            email: $scope.email,
            password: $scope.password,
            success: function(user) {
                alert('login success!')
            },
            error: function(xhr) {
                alert(xhr.responseJSON.error);
            }
        });
    }

}])
.controller('RegisterCtrl', ['$scope', function($scope) {
    $scope.register = function() {
    	if ($scope.password1 != $scope.password2){
    		alert('Passwords do not match');
    		return;
    	}

        Todo.createUser({
            email: $scope.email,
            password: $scope.password1,
            success: function(user) {
                alert('user create success!')
            },
            error: function(xhr) {
               alert([$scope.email,xhr.responseJSON.email[0]].join(' '));
            }
        });
    }
}]);