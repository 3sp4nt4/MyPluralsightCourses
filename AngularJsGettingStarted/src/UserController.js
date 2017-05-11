
(function () {
    var app = angular.module("githubViewer");

    var UserController = function ($scope, $routeParams, github) {

        var onRepos = function (data) {
            $scope.repos = data;
        };

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user)
                .then(onRepos, onError);
        };

        var onError = function (reason) {
            $scope.error= "Could no fetch the user";
        };

        $scope.username= $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    app.controller("UserController", ["$scope", "$routeParams", "github", UserController]);

}());