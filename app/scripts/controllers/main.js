/**
 * @ngdoc function
 * @name admiralAckbarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the admiralAckbarApp
 */

/*jslint white: true */
/*global angular */
angular.module('admiralAckbarApp')
  .controller('MainCtrl', function ($scope) {
    'use strict';

    $scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
