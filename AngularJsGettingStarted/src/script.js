(function () {
    var app = angular.module("githubViewer", []);
    
    var MainController = function ($scope, $http) {
            
        $scope.username= "angular";
        $scope.message= "GitHub Viewer"; 
        
        var onRepos = function (response) {
          $scope.repos = response.data;  
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
            $http.get("https://api.github.com/users/" + $scope.username)
                .then(onUserComplete, onError);
        };
        
       $scope.search(); 
    };
    
    app.controller("MainController", ["$scope", "$http", MainController]);
}());