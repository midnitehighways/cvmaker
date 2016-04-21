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

mainApp.directive('cvTypes', function() {               // show available CV types
    return function (scope, element, attributes) {

            var attrValue = attributes['cvTypes'];
            var data = scope['attrValue'];

// console.log("----",scope['attrValue']);
//                 var e = angular.element("<button type=image name=cvType value='0'>");
//                 element.append(e);
//                 e = angular.element("<button type=image name=cvType>").val("1");
//                 element.append(e);
//                 e = angular.element("<img>");
//                 e.attr("src",data);
//                 console.log("!!!!"+e.attr("src"));
//                 console.log("--aaa---"+attributes[e]);
                // element.append(e);
        }
    
}

    );

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