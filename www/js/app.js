// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.Home', {
    url: "/Home",
    views: {
      'menuContent': {
        templateUrl: "templates/Home.html"
      }
    }
  })

  .state('app.Jours', {
    url: "/Jours",
    views: {
      'menuContent': {
        templateUrl: "templates/Jours.html"
      }
    }
  })

  .state('app.Mois', {
    url: "/Mois",
    views: {
      'menuContent': {
        templateUrl: "templates/Mois.html"
      }
    }
  })
  
    .state('app.Legumes', {
      url: "/Legumes",
      views: {
        'menuContent': {
          templateUrl: "templates/Legumes.html"
        }
      }
    })
    .state('app.Alphabets', {
      url: "/Alphabets",
      views: {
        'menuContent': {
          templateUrl: "templates/Alphabets.html"
        }
      }
    })
    .state('app.Saisons', {
      url: "/Saisons",
      views: {
        'menuContent': {
          templateUrl: "templates/Saisons.html"
        }
      }
    })
    .state('app.Couleurs', {
      url: "/Couleurs",
      views: {
        'menuContent': {
          templateUrl: "templates/Couleurs.html"
        }
      }
    })
    .state('app.Dictionnaire', {
      url: "/Dictionnaire",
      views: {
        'menuContent': {
          templateUrl: "templates/Dictionnaire.html"
        }
      }
    })
    .state('app.Animaux', {
      url: "/Animaux",
      views: {
        'menuContent': {
          templateUrl: "templates/Animaux.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/Home');
});
