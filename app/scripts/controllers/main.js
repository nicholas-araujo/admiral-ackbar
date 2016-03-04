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

    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
