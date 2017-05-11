(function () {
    var app = angular.module("githubViewer");

    var MainController = function ($scope, $interval,$location) {

        $scope.search = function () {

            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = 0;
                countdownInterval = null;
            }
            $location.path("/user/" + $scope.username)
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
        $scope.countdown = 5;
        
        startCountdown();
    };
    
    app.controller("MainController", ["$scope", "$interval", "$location", MainController]);
   
}());