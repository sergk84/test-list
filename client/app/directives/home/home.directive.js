import template from './home.html';
import controller from './home.controller';
import './home.less';

class homeDirective {
  constructor() {
    "ngInject";
    this.restrict = 'E'
    this.template = template
    this.contoller = controller
    this.contollerAs = '$ctrl'
    this.scope = {}
  }
}

export default homeDirective;
