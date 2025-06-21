/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_186279332")

  // update collection data
  unmarshal({
    "createRule": "_owner.id = @request.auth.id || \n_managers.id ~ @request.auth.id",
    "deleteRule": "_owner.id = @request.auth.id || \n_managers.id ~ @request.auth.id",
    "updateRule": "_owner.id = @request.auth.id || \n_managers.id ~ @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_186279332")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
})
