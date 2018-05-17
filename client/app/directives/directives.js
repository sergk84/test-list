import angular from 'angular';
import Home from './home/home';

let directivesModule = angular.module('app.directives', [
  Home,
])

.name;

export default directivesModule;
