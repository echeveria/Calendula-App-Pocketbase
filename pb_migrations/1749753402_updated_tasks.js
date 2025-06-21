/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2314121105",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "assigned_to",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3725765462",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "created_by",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1513624059",
    "maxSelect": 1,
    "name": "schedule",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "weekly",
      "monthly",
      "twice_a_month"
    ]
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "pending",
      "in_progress",
      "completed",
      "canceled"
    ]
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date3851565399",
    "max": "",
    "min": "",
    "name": "due_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2602490748")

  // remove field
  collection.fields.removeById("relation2314121105")

  // remove field
  collection.fields.removeById("relation3725765462")

  // remove field
  collection.fields.removeById("select1513624059")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "not_started",
      "in_progress",
      "completed"
    ]
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date3851565399",
    "max": "",
    "min": "",
    "name": "runAt",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
