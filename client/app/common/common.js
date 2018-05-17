import angular from 'angular';
import TreeView from './tree-view/tree-view'

let commonModule = angular.module('app.common', [
  TreeView
])

.name;

export default commonModule;
