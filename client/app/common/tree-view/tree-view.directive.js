import template from './tree-view.html';
import controller from './tree-view.controller';
import './tree-view.less';

class treeViewDirective {
  constructor() {
    "ngInject";
    this.restrict = 'E'
    this.template = template
    this.controller = controller
    this.controllerAs = '$ctrl'
    this.scope = {}
  }

}

export default treeViewDirective;
