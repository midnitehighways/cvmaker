cvApp.directive("headerMain", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/header-main.html'
      };
});

cvApp.directive("footerMain", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/footer-main.html'
      };
});

cvApp.directive("preview", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/cv-preview.html'
      };
});

// cvApp.directive("personal", function() {
//       return {
//         restrict: 'E',
//         templateUrl: 'templates/personal.ejs'
//       };
// });

// cvApp.directive("education", function() {
//       return {
//         restrict: 'E',
//         templateUrl: 'templates/education.ejs'
//       };
// });

// cvApp.directive("employment", function() {
//       return {
//         restrict: 'E',
//         templateUrl: 'templates/employment.ejs'
//       };
// });