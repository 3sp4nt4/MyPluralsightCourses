(function () {
    var app = angular.module("githubViewer", []);
    
    var MainController = function ($scope, $http, $interval, $log, $anchorScroll, $location) {
            
        $scope.username= "angular";
        $scope.message= "GitHub Viewer"; 
        $scope.countdown = 5;
        $scope.repoSortOrder = "-stargazers_count";        
        
        var onRepos = function (response) {
          $scope.repos = response.data;
            $location.hash("userDetails");
            $anchorScroll();
        };
        
        var onUserComplete = function (response) {
          $scope.user = response.data;  
          $http.get($scope.user.repos_url)
            .then(onRepos, onError);
        };
        
        var onError = function (reason) {
          $scope.error= "Could no fetch the user";  
        };
        
        $scope.search = function (username) {
            $log.info("Searching for: " + username);
            $http.get("https://api.github.com/users/" + $scope.username)
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
        
        
        startCountdown();
    };
    
    app.controller("MainController", ["$scope", "$http", "$interval", "$log", "$anchorScroll", "$location", MainController]);
}());