/// <reference path="angular.js" />
var app = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employee = [
                        { name: "rahul", dateofbrith: new Date("october 27,1990"), gender: "male", salary: 55000.758 },
                        { name: "ravi", dateofbrith: new Date("August 17,1994"), gender: "male", salary: 12000.758 },
                        { name: "punit suri", dateofbrith: new Date("december 10,1990"), gender: "male", salary: 25000.658 },
                        { name: "sakshi sharma", dateofbrith: new Date("march 27,1989"), gender: "Female", salary: 30000.8 },
                        { name: "twinkle", dateofbrith: new Date("july 27,1992"), gender: "Female", salary: 12500.758 },
                    ];
                    $scope.emp = employee;
                    $scope.sortColumn = "name";
                    $scope.reverseSort = false;

                    $scope.sortData = function (column) {
                        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                        $scope.sortColumn = column;
                    }

                    $scope.getSortClass = function (column) {
                        if ($scope.sortColumn == column) {
                            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
                        }
                        return '';
                    }
                });