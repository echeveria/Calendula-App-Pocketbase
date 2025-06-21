/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_186279332")

  // update collection data
  unmarshal({
    "listRule": "_owner.id = @request.auth.id || \n_managers.id ~ @request.auth.id ||\n_gardeners.id ~ @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_186279332")

  // update collection data
  unmarshal({
    "listRule": ""
  }, collection)

  return app.save(collection)
})
