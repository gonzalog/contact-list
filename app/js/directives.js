var contactListDirectives = angular.module('contactListDirectives', []);

contactListDirectives.directive('favorite', function() {
  return {
    scope: { favorite: '=' },
    template: '<span class="fa fa-{{favorite ? \'star\' : \'star-o\'}}"></span>',
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
    link: function(scope, elements, attributes) {
      scope.toDate = function(date) {
        return (new Date(Number(date))).toDateString();
      }
    },
    templateUrl: 'app/views/contact-profile.html'
  };
});
