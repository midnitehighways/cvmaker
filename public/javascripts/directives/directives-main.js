cvApp.directive("mydir" , function() {
    return {
        // You can copy all of the attributes into the scope
        scope : {
            one : '@myOne'

        },
        template: '<p>ng-init = "menu.setTab{{one}}"One = {{one}} // Passed as my-one</p>'
      }});

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