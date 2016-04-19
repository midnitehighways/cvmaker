var mainApp = angular.module('mainApp', []);
        
mainApp.controller("CarouselCtrl", function($scope) {
    
    $scope.currentSlide = 0;
    $scope.desc = [['Several CV formats at your choice','More professional and less official','Start by choosing suitable type'],
    			['Flexible CV building process','Most relevant resume sections','Change CV content on the fly'],
    			['Constant preview while filling','Possibility to start over','Finished - just save your PDF']];

    $scope.slides = [
 			{image: 'images/different-types.png', descriptions: $scope.desc[0], index: '0'},
            {image: 'images/carousel_2.jpg', descriptions: $scope.desc[1], index: '1'},
            {image: 'images/different-types.png', descriptions: $scope.desc[2], index: '2'}
    ];
    
    // $scope.setSlide = function(slide) {
    // 	$scope.currentSlide = slide;
    // };
});

mainApp.controller("SliderCtrl", function($scope) {
    
    $scope.currentSlide = 0;

    $scope.slides = [
 			{image: 'images/cats.jpg', description: 'Image 00'},
            {image: 'images/cats2.jpg', description: 'Image 01'},
            {image: 'images/cats3.png', description: 'Image 02'}
    ];
    
    $scope.setSlide = function(slide) {
    	$scope.currentSlide = slide;
    };
});