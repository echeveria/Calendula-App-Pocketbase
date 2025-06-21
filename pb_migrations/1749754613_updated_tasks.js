/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // update collection data
  unmarshal({
    "viewRule": "_created_by.id = @request.auth.id || \n_assigned_to ~ @request.auth.id || \n_garden._owner.id = @request.auth.id ||\n_garden._managers.id ~ @request.auth.id ||\n_garden._gardeners.id ~ @request.auth.id "
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // update collection data
  unmarshal({
    "viewRule": "_created_by.id = @request.auth.id || \n@request.auth.id ~ _assigned_to || _garden._owner.id = @request.auth.id "
  }, collection)

  return app.save(collection)
})
