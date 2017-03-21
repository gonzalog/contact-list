var contactListControllers = angular.module('contactListControllers', []);

contactListControllers.controller('ContactIndexCtrl', ['$scope', 'Contacts',
  function($scope, Contacts){
    $scope.bootstrap = function() {
      Contacts.get(function(data){
        $scope.contacts = data
        $scope.currentContact = $scope.contacts[0]
      })
    }

    $scope.selectContact = function(contact) {
      $scope.currentContact = contact
    }

    $scope.toDate = function(value){
      return (new Date(Number(value))).toDateString()
    }
  }]);
