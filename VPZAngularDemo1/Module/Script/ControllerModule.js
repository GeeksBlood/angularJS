/// <reference path="angular.js" />
mainApp.controller("studentController", function ($scope) {
    $scope.student = {
        firstName: "Rahul",
        lastName: "Sharma",
        fee: 500,

        subjects: [
            { name: 'Hindi', marks: 70 },
            { name: 'English', marks: 90 },
            { name: 'Maths', marks: 65 },
            { name: 'Science', marks: 55 },
            { name: 'Physics', marks: 67 },
        ],

        fullname: function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
});