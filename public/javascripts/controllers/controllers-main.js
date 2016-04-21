var cvApp = angular.module('cvApp', []);
        
cvApp.controller("MenuCtrl", function($scope) {
    $scope.tab = 1;
    //this.tab = '<%= tab %>';                               // tab shown by default

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
