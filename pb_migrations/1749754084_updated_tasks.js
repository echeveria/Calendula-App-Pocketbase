/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // update collection data
  unmarshal({
    "createRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to",
    "deleteRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to",
    "updateRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to",
    "viewRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
