/// <reference path="angular.js" /> Model
var myapp = angular
                 .module("myModule", [])
                 .controller("myCont", function ($scope) {
                     var technologies = [
                         { name: "C#", likes: 0, dislikes: 0 },
                         { name: "Asp.Net", likes: 0, dislikes: 0 },
                         { name: "Sql Server", likes: 0, dislikes: 0 },
                         { name: "Angular JS", likes: 0, dislikes: 0 },
                     ];
                     $scope.tech = technologies;

                     $scope.incrementLike = function (technology) {
                         technology.likes++;
                     };

                     $scope.incrementDislikes = function (technology) {
                         technology.dislikes++;
                     };
                 });