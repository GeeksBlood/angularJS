/// <reference path="angular.js" />
var app = angular
                .module("myModule", [])
                .filter("gender", function () {
                    return function (gender) {
                        switch (gender) {
                            case 1:
                                return "Male";
                            case 2:
                                return "FeMale";
                            case 3:
                                return "Not Disclosed";
                        }
                    }
                })
                .controller("myController", function ($scope) {
                    var employee = [
                        { name: "rahul", gender: 1, Salary:20000},
                        { name: "ravi", gender: 2, Salary: 15000 },
                        { name: "punit suri", gender: 2, Salary: 10000 },
                        { name: "sakshi sharma", gender: 1, Salary: 60000 },
                        { name: "twinkle", gender: 3, Salary: 30000 }
                    ];
                    $scope.emp = employee;

                });