/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // update collection data
  unmarshal({
    "createRule": "_created_by.id = @request.auth.id || \n_assigned_to ~ @request.auth.id || \n_garden._owner.id = @request.auth.id ||\n_garden._managers.id ~ @request.auth.id ||\n_garden._gardeners.id ~ @request.auth.id ",
    "deleteRule": "_created_by.id = @request.auth.id || \n_garden._owner.id = @request.auth.id ||\n_garden._managers.id ~ @request.auth.id\n",
    "listRule": "_created_by.id = @request.auth.id || \n_assigned_to ~ @request.auth.id || \n_garden._owner.id = @request.auth.id ||\n_garden._managers.id ~ @request.auth.id ||\n_garden._gardeners.id ~ @request.auth.id ",
    "updateRule": "_created_by.id = @request.auth.id || \n_assigned_to ~ @request.auth.id || \n_garden._owner.id = @request.auth.id ||\n_garden._managers.id ~ @request.auth.id ||\n_garden._gardeners.id ~ @request.auth.id "
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // update collection data
  unmarshal({
    "createRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to",
    "deleteRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to",
    "listRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to",
    "updateRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to"
  }, collection)

  return app.save(collection)
})
