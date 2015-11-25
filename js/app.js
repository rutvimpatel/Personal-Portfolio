// Rutvi Patel
// Personal Portfolio Challenge
// 11/23/15
// This page provides functions, and multipage architecture for the webpage

// This intitializes the app that will allow for multipage arch
var myApp = angular.module('myApp', ['ui.router'])
// Config route provider
.config(function($stateProvider) {
    $stateProvider
    // Each state routes to a different page
  .state('home', {
    url:'/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('bio', {
    url:'/bio',
    templateUrl: 'templates/bio.html',
    controller: 'bioController',
  })
  .state('projects', {
    url:'/projects',
    templateUrl: 'templates/Projects.html',
    controller: 'ProjectsController',
  })
})

// All of the following controllers take in $scope so that
// variables are visible in the html, and $http to request from 
// the json file

// controller for home page
.controller('HomeController', function($scope, $http){
  $http.get('json/home.json').success(function(data) {
     $scope.homeOb = data;
  })
})

// Controller for projects page
.controller('ProjectsController', function($scope, $http){
  $http.get('json/projects.json').success(function(data) {
     $scope.projectsOb = data;
  })
})

// Controller for biography page
.controller('bioController', function($scope, $http){
  $http.get('json/bio.json').success(function(data) {
     $scope.bioObj = data;
  })
})



