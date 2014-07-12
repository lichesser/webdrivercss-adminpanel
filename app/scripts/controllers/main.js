'use strict';

angular.module('webdrivercssAdminpanelApp').controller('MainCtrl', function ($scope, repositories, $routeParams) {

    $scope.repositories = repositories;
    $scope.project = $routeParams.id;
    $scope.noReposFound = Object.keys($scope.repositories).length === 0;

    $scope.diffs = [];
    $scope.shots = [];

    if($routeParams.id) {
        $scope.dir   = $routeParams.id;
        $scope.diffs = repositories[$routeParams.id].diffs;
        $scope.shots = repositories[$routeParams.id].images;
    }

    angular.forEach($scope.diffs, function(diff) {
        $scope.shots.splice($scope.shots.indexOf(diff.replace(/diff/,'new')),1);
        $scope.shots.splice($scope.shots.indexOf(diff.replace(/diff/,'current')),1);
    });

});