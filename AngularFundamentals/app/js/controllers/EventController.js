'use scrict';

eventsApp.controller('EventController', ['$scope', function($scope){
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: '/img/angularjs-logo.png',
        eventSessions: [
            {
                name: 'Directives Masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and outs of..',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John Doe',
                duration: '30 mins',
                level: 'Introductory',
                abstract: 'This session will take a closer look at scopes...',
                upVoteCount: 0
            },
            {
                name: 'Well Behave Controllers',
                creatorName: 'Jane Doe',
                duration: '2 hours',
                level: 'Intermediate',
                abstract: 'Controllers are the beginning of everything...',
                upVoteCount: 0
            }
        ]
    };

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };
}]);