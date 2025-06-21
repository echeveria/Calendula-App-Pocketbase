/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_533891291")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select532148769",
    "maxSelect": 1,
    "name": "recurrence",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "daily",
      "weekly",
      "bi-monthly",
      "monthly"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_533891291")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select532148769",
    "maxSelect": 1,
    "name": "recurrence",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "'daily'",
      "'weekly'",
      "'bi-monthly'",
      "'monthly'"
    ]
  }))

  return app.save(collection)
})
