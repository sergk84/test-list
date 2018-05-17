import template from './app.html';
import './app.less';

class appDirective {
  constructor() {
    "ngInject";
    this.restrict = 'E'
    this.template = template
    this.scope = {}
  }
}

export default appDirective;
