/// <reference path="angular.js" />
var myapp = angular
                  .module("myModule", [])
                  .controller("myController", function ($scope) {
                      $scope.message = "Angular Js";

                  });

//var myapp = angular
//                  .module("myModule", [])
//                  .controller("myController", function ($scope) {
//                      var employee = {
//                          firstName: "rahul",
//                          lastName: "sharma",
//                          gender: "Male"
//                      };
//                      $scope.emp = employee;
//                  });