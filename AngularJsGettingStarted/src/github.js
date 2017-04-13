(function () {
    var github = function($http) {
        
        var _getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data; 
            });
        };
        
        var _getRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
            });
        };
              
        return {
            getUser: _getUser,
            getRepos: _getRepos
        };
    };
    
    var module = angular.module("githubViewer");
    module.factory("github", github);
}());
