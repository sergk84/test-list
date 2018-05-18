class treeService {
  constructor() {
    "ngInject";

    this.items = [
      {
        label: 'Test 1',
      },{
        label: 'Test 2',
        nodes: [
          {
            label: 'Test 1 lv2',
          },
          {
            label: 'Test 2 lv2',
            nodes: [
              {
                label: 'Test 1 lv3',
              },
              {
                label: 'Test 2 lv3',
              }
            ]
          },
          {
            label: 'Test 3 lv2',
          },
          {
            label: 'Test 4 lv2',
          },
        ]
      },{
        label: 'Test 3',
      },{
        label: 'Test 4',
      }
    ]
  }
}

export default treeService;
