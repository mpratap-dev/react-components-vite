

export const columnL1Data = [{
  id: 1230,
  label: "Skin",
  sku_count: 123,
  created_on: "123123",
  path: [{
    id: 123,
    label: "Skin"
  }]
},{
  id: 1231,
  label: "Mens",
  sku_count: 121,
  created_on: "123123",
  // parent_category_id: 1233,
  path: [{
    id: 1231,
    label: "Men"
  }]
}];

export const columnL2Data = [{
  id: 8393,
  label: "Moisturizer",
  sku_count: 123,
  created_on: "123123",
  parent_category_id: 1230,
  path: [{
    id: 1230,
    label: "Skin"
  },{
    id: 8393,
    label: "Moisturizer"
  },]
},{
  id: 8378,
  label: "Cleanser",
  sku_count: 121,
  created_on: "123123",
  parent_category_id: 1230,
  path: [{
    id: 1230,
    label: "Skin"
  },{
    id: 8393,
    label: "Cleanser"
  }]
},{
  id: 1286,
  label: "Shaving",
  sku_count: 123,
  created_on: "123123",
  parent_category_id: 1231,
  path: [{
    id: 1230,
    label: "Mens"
  },{
    id: 1286,
    label: "Shaving"
  }]
},{
  id: 1298,
  label: "Hair Care",
  sku_count: 123,
  created_on: "123123",
  parent_category_id: 1231,
  path: [{
    id: 1230,
    label: "Mens"
  },{
    id: 1298,
    label: "Hair Care"
  }]
},{
  id: 1291,
  label: "Beard Care",
  sku_count: 123,
  created_on: "123123",
  parent_category_id: 1231,
  path: [{
    id: 1230,
    label: "Mens"
  },{
    id: 1291,
    label: "Beard Care"
  }]
},]

const level1 = [
  {
    id: 1230,
    render: ({ isActive }: any) => (
      <div className={`${isActive ? 'active': ''} list-group-item`}>
        <span>Skin</span>
        <p>1230</p>
      </div>
    ),
    path: ["Skin"],
  },
  {
    id: 1231,
    render: ({ isActive }: any) => (
      <div className={`${isActive ? 'active': ''} list-group-item`}>
        <span>Mens</span>
        <p>1231</p>
      </div>
    ),
    path: ["Mens"],
  },
];

const level2 = [
  {
    id: 8393,
    render: ({ isActive }: any) => (
      <div className={`${isActive ? 'active': ''} list-group-item`}>
        <span>Moisturizer</span>
        <p>8393</p>
      </div>
    ),
    parentId: 1230,
    path: ["Skin", "Moisturizer"],
  },
  {
    id: 8378,
    render: ({ isActive }: any) => (
      <div className={`${isActive ? 'active': ''} list-group-item`}>
        <span>Cleanser</span>
        <p>8378</p>
      </div>
    ),
    parentId: 1230,
    path: ["Skin", "Cleanser"],
  },
  {
    id: 1286,
    render: ({ isActive }: any) => (
      <div className={`${isActive ? 'active': ''} list-group-item`}>
        <span>Shaving</span>
        <p>1286</p>
      </div>
    ),
    parentId: 1231,
    path: ["Mens", "Shaving"],
  },
];

const level3 = [{
  id: 1296,
  render: ({ isActive }: any) => (
    <div className={`${isActive ? 'active': ''} list-group-item`}>
      <span>Trimmers</span>
      <p>1296</p>
    </div>
  ),
  parentId: 1286,
  path: ["Mens", "Shaving", "Trimmers"],
}];

export const columns = [level1, level2, level3];