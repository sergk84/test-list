import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Directives from './directives/directives';
import AppDirective from './app.directive';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Directives
  ])
  .config(($stateProvider ,$locationProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true).hashPrefix('!');

  })

  .directive('app', () => new AppDirective);
