import angular from 'angular';
import uiRouter from 'angular-ui-router';
import treeViewDirective from './tree-view.directive';
import treeViewItemDirective from './item/item.directive';
import treeService from './tree-view.service';

let treeViewModule = angular.module('TreeView', [
  uiRouter
])

.directive('treeView', () => new treeViewDirective)
.directive('treeViewItem', treeViewItemDirective.directiveFactory)
.service('treeService', treeService)

.name;

export default treeViewModule;
