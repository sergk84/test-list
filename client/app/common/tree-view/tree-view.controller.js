class TreeViewController {
  constructor(treeService) {
    "ngInject";
    this.items = treeService.items;
  }
}

export default TreeViewController;
