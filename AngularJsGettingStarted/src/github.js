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

        var _getRepoDetails = function(username, reponame) {
            var repo;
            var repoUrl = "https:/api.github.com/repos/" + username + "/" + reponame;

            return $http.get(repoUrl)
                .then(function(response){
                    repo = response.data;
                    return repo;
                    //return $http.get(repoUrl + "/collaborators");
                })
                /*.then(function(response){
                    repo.collaborators = response.data;
                    return repo;
                });*/
        };
              
        return {
            getUser: _getUser,
            getRepos: _getRepos,
            getRepoDetails: _getRepoDetails
        };
    };
    
    var module = angular.module("githubViewer");
    module.factory("github", github);
}());
