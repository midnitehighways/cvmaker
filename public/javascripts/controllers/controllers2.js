var mainApp = angular.module('mainApp', []);
        
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