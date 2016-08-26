/// <reference path="angular.js" />
var app = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employee = [
                        { name: "rahul", gender: "male", Salary: 20000 ,city:"delhi"},
                        { name: "ravi", gender: "male", Salary: 15000, city: "up" },
                        { name: "punit suri", gender: "male", Salary: 10000, city: "mp" },
                        { name: "sakshi sharma", gender: "female", Salary: 60000, city: "punjab" },
                        { name: "twinkle", gender: "female", Salary: 30000, city: "haryana" }
                    ];
                    $scope.emp = employee;

                });