cvApp.directive("footer", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/footer.html'
      };
});

cvApp.directive("preview", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/cv-preview.html'
      };
});

cvApp.directive("personal", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/personal.ejs'
      };
});

cvApp.directive("education", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/education.ejs'
      };
});

cvApp.directive("employment", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/employment.ejs'
      };
});