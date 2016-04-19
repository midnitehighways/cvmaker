mainApp.directive("headerIndex", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/header-index.html'
      };
});

mainApp.directive("footerIndex", function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/footer-index.html'
      };
});

mainApp.directive('tooltip', function() {		// activating tooltip in Angular	
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).hover(function() {
                $(element).tooltip('show');
            }, function(){
                $(element).tooltip('hide');
            });
            $(element).tooltip({placement: "right"});		// set placement and toggle attributes from this directive
            $(element).tooltip({toggle: "tooltip"});		// thus we don't need to put "data-placement" and "data-toggle" inside tag
        }
    };
});
