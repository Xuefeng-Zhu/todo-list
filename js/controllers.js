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
.controller('ListsCtrl', ['$scope','$rootScope', '$location',function($scope, $rootScope, $location){
    if (!$rootScope.user){
        alert("Login fails");
        $location.path('/login');
        return;
    }

    Todo.loadTodos({
        success: function(todos) {
            $scope.todos = todos;
            $scope.$apply();
        },
        error: function(xhr) {
            alert("Fail to load list");
        }
    });

	$scope.addTodo = function(){
        Todo.createTodo({
            todo: {description: $scope.newTodo},
            success: function(todo){
                $scope.todos.push(todo);
                $scope.newTodo = null;
                $scope.$apply();
            },
            error: function(xhr) {
                alert("An error occurs when you are trying to add a todo");
            }
        })
    }
}]);