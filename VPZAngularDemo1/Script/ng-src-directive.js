/// <reference path="angular.js" />
var myApp = angular
                  .module("myModule", [])
                  .controller("myController", function ($scope) {
                      var country = {
                          name: "India",
                          capital: "New Delhi",
                          flag: "/Image/JaiHo.jpg"
                      };

                      $scope.country = country;
                  });