/// <reference path="angular.min.js" />

var myapp = angular.module("myModule", []);

myapp.controller("myController", function ($scope) {
    var employee = {
        firstName: "rahul",
        lastName: "sharma",
        Gender: "Male",
    };
    $scope.emp = employee;
});




//var myapp = angular
//                  .module("myModule", [])
//                  .controller("myController", function ($scope) {
//                      var employee = {
//                          firstName: "rahul",
//                          lastName: "sharma",
//                          Gender: "Male"
//                      };

//                      $scope.emp = employee;
//                  });