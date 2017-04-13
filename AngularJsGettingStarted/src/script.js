(function () {
    var app = angular.module("githubViewer", []);
    //app.factory("github", ["$http", github]);
    
    var MainController = function ($scope, $http, github, $interval, $log, $anchorScroll, $location) {
                   
        var onRepos = function (data) {
          $scope.repos = data;
            $location.hash("userDetails");
            $anchorScroll();
        };
        
        var onUserComplete = function (data) {
          $scope.user = data;
          github.getRepos($scope.user)
            .then(onRepos, onError);
        };
        
        var onError = function (reason) {
          $scope.error= "Could no fetch the user";  
        };
        
        $scope.search = function () {
            $log.info("Searching for: " + $scope.username);
            github.getUser($scope.username)
                .then(onUserComplete, onError);
            
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = 0;
                countdownInterval = null;
            }
        };
        
        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };
        
        var countdownInterval = null;       
        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);  
        };
        
        $scope.username= "angular";
        $scope.message= "GitHub Viewer"; 
        $scope.countdown = 5;
        $scope.repoSortOrder = "-stargazers_count";        
        
        startCountdown();
    };
    
    app.controller("MainController", ["$scope", "$http", "github", "$interval", "$log", "$anchorScroll", "$location", MainController]);
   
}());