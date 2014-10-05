'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('LoginCtrl', ['$scope',
    function($scope) {
        $scope.signup = function() {
            $('.modal')
                .modal('show');
        }

    }
])
    .controller('MyCtrl2', [
        function() {

        }
    ]);