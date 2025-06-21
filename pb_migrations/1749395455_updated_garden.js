/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_186279332")

  // update collection data
  unmarshal({
    "name": "gardens"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_186279332")

  // update collection data
  unmarshal({
    "name": "garden"
  }, collection)

  return app.save(collection)
})
