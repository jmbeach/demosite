﻿//#region DEFINITION
var master = angular.module('master', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ui.router', 'vcRecaptcha']);
//#endregion

// #region ROUTING
master.config(['$urlMatcherFactoryProvider', '$routeProvider', '$locationProvider', '$stateProvider',
  function ($urlMatcherFactory, $routeProvider, $locationProvider, $stateProvider) {
      $urlMatcherFactory.caseInsensitive(true);
      $urlMatcherFactory.strictMode(false);
      $locationProvider.html5Mode({
          enabled: true
      });
      $stateProvider
          // #region DEFAULT
        .state(
          "Default", {
              url: "/",
              views: {
                  "master": {
                      templateUrl: 'views/main.html',
                      controller: 'main',
                      controllerAs: 'main'
                  },
                  "product@Default": {
                      templateUrl: 'views/sub/product.html',
                      controller: 'product',
                      controllerAs: 'product'
                  },
                  "footer@Default": {
                      templateUrl: 'views/sub/footer.html'
                  }
              }
          })
          // #endregion
          //#region ABOUT
      .state("about", {
          url: "/about",
          views: {
              "master": {
                  templateUrl: 'views/about.html',
                  controller: 'about',
                  controllerAs: 'about'
              },
              "technologies@about": {
                  templateUrl: 'partials/about/technology.html',
                  controller: "tech",
                  controllerAs: 'tech'
              }
          }
      })
      //#endregion
      // #region OTHER_STATE
      //.state(
      //  "template", {
      //      url: "/template",
      //      views: {
      //          "master": {
      //              templateUrl: 'views/template.html',
      //              controller: 'template,
      //              controllerAs: 'template'
      //          }
      //      }
      //  }
      //)
      //.state(
      //  "template.specific", {
      //      url: "/:name",
      //      views: {
      //          "doc@docs": {
      //              templateUrl: 'views/subviews/sub_template.html',
      //              controller: 'template',
      //              controllerAs: 'template'
      //          }
      //      }
      //  }
      //#endregion
      ;
  }
]);
// #endregion

// #CONFIG_MAIN_CONTROLLER
master.controller('body', ['$route', '$routeParams', '$location',
  function ($route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
  }
]);
function Main() { }
master.controller('main', Main);
// #endregion

// #region MASTER_RUN
master.run(function ($rootScope, $location) {
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        if (!$rootScope.anyVisited) {
            $rootScope.anyVisited = 0;
        }
        $rootScope.anyVisited++;
    });
});
// #endregion

//#region MORE_CONTROLLERS
master.controller('nav', Navbar);
master.controller('product', Product);
master.controller('about', About);
master.controller('tech', TechnologyGenerator);
//#endregion