import angular from 'angular';
import uiRouter from 'angular-ui-router';
import treeViewDirective from './tree-view.directive';

let treeViewModule = angular.module('TreeView', [
  uiRouter
])

.directive('treeView', () => new treeViewDirective)

.name;

export default treeViewModule;
