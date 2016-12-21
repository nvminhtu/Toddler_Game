
var app = angular.module('starter', ['ionic', 'slidingPuzzle', 'wordSearchPuzzle','LocalStorageModule'])

app.run(function($ionicPlatform, CacheService,$state,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // Func1: check Cache Service existed
  if(CacheService.get('theme') === null){
    CacheService.set('theme', './img/sc-01.png');
  };

  if(CacheService.get('level') === null){
    CacheService.set('level', '1');
  };

   if(CacheService.get('gotLevel') === null){
    CacheService.set('gotLevel', '6');
  };

  // Func2: Set state for transition
  $rootScope.$state = $state;

  $ionicPlatform.registerBackButtonAction(function (event) {
    if($state.current.name=="splash"){
        navigator.app.exitApp(); //<-- remove this line to disable the exit
      }
      else {
        navigator.app.backHistory();
      }
  }, 100);

});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('screenplay', {
    url: '/screenplay',
    cache: false,
    templateUrl: 'templates/screenplay.html',
    controller: 'slidingAdvancedCtrl'
  })

  .state('themes', {
    url: '/themes',
    cache: false,
    templateUrl: 'templates/themes.html',
    controller: 'slidingAdvancedCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'slidingAdvancedCtrl'
  })

  .state('splash', {
    url: '/splash',
    templateUrl: 'templates/splash.html',
    controller: 'slidingAdvancedCtrl'
  })

  .state('viewref', {
    url: '/viewref',
    templateUrl: 'templates/viewref.html',
    controller: 'slidingAdvancedCtrl'
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/splash');

});
