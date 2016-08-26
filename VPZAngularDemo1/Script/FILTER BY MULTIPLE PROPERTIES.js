/// <reference path="angular.js" />
var app = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employee = [
                        { name: "rahul", dateofbrith: new Date("october 27,1990"), gender: "male", city:"Delhi"},
                        { name: "ravi", dateofbrith: new Date("August 17,1994"), gender: "male", city: "UP" },
                        { name: "punit suri", dateofbrith: new Date("december 10,1990"), gender: "male", city: "MP" },
                        { name: "sakshi sharma", dateofbrith: new Date("march 27,1989"), gender: "Female", city: "Gujrat" },
                        { name: "twinkle", dateofbrith: new Date("july 27,1992"), gender: "Female", city: "Punjab" },
                    ];
                    $scope.emp = employee;


                    //$scope.search = function (item) {
                    //    if ($scope.searchText == undefined) {
                    //        return true;
                    //    }
                    //    else {
                    //        if (item.name.toLowerCase().indexOf($scope.searchText()) != -1 ||
                    //            item.city.toLowerCase().indexOf($scope.searchText()) != -1)
                    //        {
                    //            return true;
                    //        }
                    //    }
                    //    return false;
                    //}
                });