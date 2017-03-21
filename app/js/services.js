var contactListServices = angular.module('contactListServices', []);

contactListServices.factory('Contacts', ['$http',
  function($http){
    return {
      get: function(callback) {
        return $http.get('https://s3.amazonaws.com/technical-challenge/Contacts_v2.json').success(callback);
      }
    }
  }]);
