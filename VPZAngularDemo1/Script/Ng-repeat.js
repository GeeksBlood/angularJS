/// <reference path="angular.js" />
var myapp = angular
                 .module("myModule", [])
                 .controller("myController", function ($scope) {
                     var employee = [
                         { firstName: "rahul", lastName: "sharma", gender: "male", salary: 50000 },
                         { firstName: "maheep", lastName: "singh", gender: "male", salary: 25500 },
                         { firstName: "sumit", lastName: "singh", gender: "male", salary: 40000 },
                         { firstName: "rupesh", lastName: "gupta", gender: "male", salary: 35000 },
                         { firstName: "Yashwant", lastName: "yadav", gender: "male", salary: 50000 }
                     ];
                     $scope.emp = employee;
                 });

//create an nested ng-repeat 

var myapp = angular
                 .module("myModule", [])
                 .controller("myCont", function ($scope) {
                     var countries = [
                         {
                             name: "India",
                             city: [
                                 { name: "Delhi" },
                                 { name: "punjab" },
                                 { name: "bihar" }
                             ]
                         },
                          {
                              name: "Uk",
                              city: [
                                  { name: "lodan" },
                                  { name: "manchester" },
                                  { name: "birmingham" }
                              ]
                          },
                          {
                              name: "USA",
                              city: [
                                  { name: "Chichgo" },
                                  { name: "los angles" },
                                  { name: "houston" },
                              ]
                          }
                     ];
                     $scope.countries = countries;
                 });