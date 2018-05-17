import template from './tree-view.html';
import controller from './tree-view.controller';
import './tree-view.less';

// let treeViewDirective = {
//   bindings: {},
//   template,
//   controller
// };
class treeViewDirective {
  constructor() {
    "ngInject";
    this.restrict = 'E'
    this.template = template
    this.controller = controller
    this.controllerAs = '$ctrl'
    this.scope = {}
  }

  // controller($scope, $state, MessagesService) {
  //   "ngInject";
  //   $scope.state = $state;
  //   $scope.service = MessagesService;
  // }
  //
  // link(scope, element, attrs) {
  //   "ngInject";
  //   console.log('state', scope.state)
  //   console.log('service', scope.service)
  // }
}

export default treeViewDirective;
