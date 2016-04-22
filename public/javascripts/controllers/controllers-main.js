var cvApp = angular.module('cvApp', []);
        
cvApp.controller("MenuCtrl", function($scope, $element, $attrs) {
    
    //console.log("attrs: " + $attrs.myOne);
    //this.tab = '<%= tab %>';                               // tab shown by default

	// $scope.init = function(name)
  {
    //This function is sort of private constructor for controller
    // $scope.name = name;
    // console.log("scope.name" + $scope.name);
    // return $scope.name
    //Based on passed argument you can make a call to resource
    //and initialize more objects
    //$resource.getMeBond(007)
  };

  //console.log("scope.name" + $scope.initt);
  $scope.tab = $scope.initt || 1;

    this.isSet = function(checkTab) {
      return $scope.tab === checkTab;
    };

    this.setTab = function(setTab) {
      $scope.tab = setTab;
    };
});

// cvApp.controller('PersonCtrl', function(){
//                 this.p = person;
//         });
//             var person = {
//                 fullName: "fullName || ",
//                 email: "a",
//                 phone: "333",
//                 born: "23.03.82",
//                 address: "Rälssintie 16 B 14 Helsinki",
//                 citizenship: "MM",
//                 education: [{university: "Haaga-Helia University of Applied Sciences",
//                 faculty: "Business Information Technology",
//                 from: "Aug. 2013",
//                 till: "Dec. 2016"}],
//                 employment: [{university: "Haaga-Helia University of Applied Sciences",
//                 faculty: "Business Information Technology",
//                 from: "Aug. 2013",
//                 till: "Dec. 2016"}],
//                 skills: ["some skills"],
//                 languages: ["suomi"],
//                 about: "about",
//                 pic: ""
//             };
