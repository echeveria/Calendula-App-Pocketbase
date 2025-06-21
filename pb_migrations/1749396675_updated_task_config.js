/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_533891291")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1579384326",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation1163397856",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "_owner",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2004238209",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "_gardeners",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_186279332",
    "hidden": false,
    "id": "relation1007229162",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "garden",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_533891291")

  // remove field
  collection.fields.removeById("text1579384326")

  // remove field
  collection.fields.removeById("relation1163397856")

  // remove field
  collection.fields.removeById("relation2004238209")

  // remove field
  collection.fields.removeById("relation1007229162")

  // remove field
  collection.fields.removeById("select532148769")

  return app.save(collection)
})
