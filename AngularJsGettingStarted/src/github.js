(function() {
    var github = function($http) {
        
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username);
        }
        
        
        
        return {
            
        };
    };
    
    var module = angular.module("githubViewer");
    
}());