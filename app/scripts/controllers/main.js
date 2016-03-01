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
  });
