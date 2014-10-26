'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firebaseApp

 */
angular.module('firebaseApp')

  .controller('AboutCtrl', function ($scope, broadcastFactory) {


    $scope.awesomeThings = {

      "HTML5":{
      "description": "HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.",
      "name": "HTML5 Boilerplate"
      },
      "AngularJS": {
      "description": "AngularJS is a toolset for building the framework most suited to your application development.",
      "name": "AngularJS"
      },

      "Karma": {
      "description": "Spectacular Test Runner for JavaScript.",
      "name": "Karma"
      }
    };



  });
