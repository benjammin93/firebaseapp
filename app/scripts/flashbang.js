
'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.factory:broadcastFactory
 * @description
 * # broadcastFactory
 * factory to instantiate firebase object
 */
angular.module('firebaseApp')
  .factory('broadcastFactory', function($firebase, fb_url) {
  return {
    getBroadcast: function(key) {
      return $firebase(new Firebase(fb_url + '/' + key));
    },
    getAllBroadcasts: function() {
      return $firebase(new Firebase(fb_url));
    }
  };
})

/**
 * @ngdoc function
 * @name firebaseApp.controller:BroadcastCtrl
 * @description
 * # broadcastFactory
 * factory to instantiate firebase object
 */
angular.module('firebaseApp')
  .controller('broadcastCtrl', function($scope, broadcastFactory, $firebase) {
    $scope.isEditable = false;
    $scope.broadcastName = '';
    $scope.isButtonEnabled = function() {
      return ($scope.broadcastName === 'undefined') || ($scope.broadcastName.length < 1);
    };
    $scope.startBroadcast = function() {
      $scope.isEditable = true;
      $scope.broadcastFromFireBase = broadcastFactory.getBroadcast($scope.broadcastName);
      $scope.broadcastFromFireBase.$set('');
      $scope.broadcastFromFireBase.$bind($scope, 'broadcast');
    };
    $scope.dropdownMessage = 'Retrieving Broadcasts...';
    $scope.broadcasts = broadcastFactory.getAllBroadcasts();
    $scope.broadcasts.$on('loaded', function() {
      $scope.dropdownMessage = 'Select a broadcast';
    });

    $scope.broadcastSelected = function() {
      $scope.broadcast = broadcastFactory.getBroadcast($scope.broadcastToView);
    }

})

angular.module('firebaseApp')
  .directive('demoEditor', function(broadcastFactory) {
  return {
    restrict: 'AE',
    link: function(scope, elem, attrs) {
      scope.$watch('isEditable', function(newValue) {
        elem.attr('contenteditable', newValue);
      });
      elem.on('keyup keydown', function() {
        scope.$apply(function() {
          scope[attrs.model] = elem.html().trim();
        });
      });
    }
  };
});
