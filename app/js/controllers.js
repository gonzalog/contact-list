var contactListControllers = angular.module('contactListControllers', []);

contactListControllers.controller('ContactIndexCtrl', ['$scope', 'Contacts',
  function($scope, Contacts){
    $scope.bootstrap = function() {
      Contacts.get(function(data){
        $scope.contacts = data
        $scope.currentContact = $scope.contacts[0]
        $scope.currentContact.selected = true
        $scope.displayingContact = false
      })
    }

    $scope.selectContact = function(contact) {
      if($scope.currentContact)
        $scope.currentContact.selected = false;
      $scope.currentContact = contact
      $scope.displayingContact = true
      $scope.currentContact.selected = true
    }

    $scope.closeProfile = function() {
      $scope.displayingContact = false
      $scope.currentContact.selected = false
    }

    $scope.favoriteClick = function(contact) {
      contact.favorite = !contact.favorite;
    }
  }]);
