var app = angular.module("myApp", []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.test = "Family";

    $scope.questions = [];

    $scope.selectDeck = function (deck) {
        switch (deck) {
            case 'family':
                $http({
                    method: 'GET',
                    url: 'https://raw.githubusercontent.com/daviscodesbugs/table-talk/master/src/cards/family.json'
                }).then(function success(res) {
                    $scope.questions = res.data.questions;
                }, function error(res) {
                    alert('Couldn\'t get family questions');
                });
                break;
            default:
                alert('nothing');
        }
    }
});


$(function () {
    setTimeout(function () {
        $('#family_card').removeClass('off-bottom');
    }, 500);

    $('#family_card').click(function () {
        $(this).addClass('off-top');
    });
});