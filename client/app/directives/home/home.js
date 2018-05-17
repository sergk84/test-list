import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeDirective from './home.directive';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.directive('home', () => new homeDirective)

.name;

export default homeModule;
