(function() {
    var github = function($http) {
        
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function)
        }
        
        
        
        return {
            
        };
    };
    
    var module = angular.module("githubViewer");
    
}());