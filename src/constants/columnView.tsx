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
}];

export const columnL3Data = [{
  id: 2286,
  label: "Trimmers",
  sku_count: 123,
  created_on: "123123",
  parent_category_id: 1286,
  path: [{
    id: 1230,
    label: "Mens"
  },{
    id: 1286,
    label: "Shaving"
  },{
    id: 2286,
    label: "Trimmers"
  }]
},{
  id: 2296,
  label: "Shaving creams",
  sku_count: 123,
  created_on: "123123",
  parent_category_id: 1286,
  path: [{
    id: 1230,
    label: "Mens"
  },{
    id: 1286,
    label: "Shaving"
  },{
    id: 2296,
    label: "Shaving creams"
  }]
},{
  id: 1201,
  label: "Beard Oils",
  sku_count: 123,
  created_on: "123123",
  parent_category_id: 1291,
  path: [{
    id: 1230,
    label: "Mens"
  },{
    id: 1201,
    label: "Bread Care"
  },{
    id: 1201,
    label: "Beard Oils"
  }]
}];

export const columnData = [columnL1Data, columnL2Data, columnL3Data]
