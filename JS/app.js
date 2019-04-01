var tuister=angular.module('tuister',['ngRoute'])
.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/',{
        controller: 'Demo',
        templateUrl: 'index.html'
    })
    .when('/login',{
        controller: 'Demo',
        templateUrl: 'login.html'
    })
    .when('/registro',{
        controller: 'registro',
        templateUrl: 'registro.html'
    })
    .when('/MostrarPosts',{
        controller: 'Demo',
        templateUrl: 'MostrarPosts.html'
    })
    
   
    .otherwise('/');
})