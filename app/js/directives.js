var contactListDirectives = angular.module('contactListDirectives', []);

contactListDirectives.directive('favorite', function() {
  return {
    scope: { favorite: '=' },
    template: '<span class="glyphicon glyphicon-{{favorite ? \'star\' : \'star-empty\'}}"></span>',
    replace: true
  };
});

contactListDirectives.directive('contactList', function() {
  return {
    scope: {
      contacts: '=',
      onContactClick: '='
    },
    templateUrl: 'app/views/contact-list.html'
  };
});

contactListDirectives.directive('contactProfile', function() {
  return {
    scope: { 
      contact: '=',
      favoriteClick: '='
    },
    templateUrl: 'app/views/contact-profile.html'
  };
});
