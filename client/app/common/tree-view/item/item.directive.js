import template from './item.html';
import './item.less';

const COMPILE = new WeakMap();
class treeViewItemDirective {
  constructor($compile) {
    this.restrict = 'E'
    this.template = template
    this.scope = {
      item : '='
    }
    COMPILE.set(this, $compile);
  }
  link($scope, $element) {
    $scope.clickItem = function (item) {
      console.log(item);
    }
    $scope.showList = false;

    if (angular.isArray($scope.item.nodes) && $scope.item.nodes.length > 0) {
      if ($scope.item.nodes.length > 0) {
        $scope.showList = true;

        let innerContainer = angular.element($element[0].querySelector('.inner-item'))
        angular.forEach($scope.item.nodes, (item, index) => {
          innerContainer.append('<tree-view-item item="item.nodes[' + index + ']"></tree-view-item>');
        });
        COMPILE.get(treeViewItemDirective.instance)(innerContainer.contents())($scope)
      }
    }
  }
  static directiveFactory($compile){
    treeViewItemDirective.instance =new treeViewItemDirective($compile);
    return treeViewItemDirective.instance;
  }
}

treeViewItemDirective.directiveFactory.$inject = ['$compile'];
export default treeViewItemDirective;
