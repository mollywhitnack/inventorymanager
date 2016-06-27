'use strict'

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {url: '/', template: '<h1 class = "welcome" >Welcome To Inventory Manager</h1>'})
      .state('allItems', {url: '/allItems', templateUrl: 'html/allItems.html', controller: 'allItemsCtrl'})
      .state('byRoom', {url: '/byRoom', templateUrl: 'html/byRoom.html', controller: 'byRoomItemsCtrl'})

    //user tries to go somewhere we dont have, just send to home
    $urlRouterProvider.otherwise('/');
});
