var mainApp = angular.module('mainApp', []);
        
mainApp.controller("CarouselCtrl", function($scope) {
    
    $scope.currentSlide = 0;
    
    $scope.desc = [     // array of description texts for slides. 3 strings per 1 slide  
                     ['Several CV formats at your choice','More professional and less official','Start by choosing suitable type'],
    			     ['Flexible CV building process','Most relevant resume sections','Change CV content on the fly'],
    			     ['Constant preview while filling','Possibility to start over','Finished - just save your PDF']
    ];

    $scope.slides = [
 			{image: 'images/different-types.png', descriptions: $scope.desc[0], index: '0'},
            {image: 'images/carousel_2.jpg', descriptions: $scope.desc[1], index: '1'},
            {image: 'images/different-types.png', descriptions: $scope.desc[2], index: '2'}
    ];
    
    // $scope.setSlide = function(slide) {
    // 	$scope.currentSlide = slide;
    // };
});

mainApp.controller("ResumeTypesCtrl", function($scope) {
    
    $scope.items = [
        {image: 'images/type0.png', name: 'Basic'},
        {image: 'images/type1.png', name: 'Black blocks'},
        {image: 'images/type2.png', name: 'Rectangle and lines'}
    ];    
});

mainApp.controller("MainCtrl", function($scope) {
    
    // $scope.
    
    // $scope.set
});