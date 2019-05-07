# jdatastudio-app

## create a react-admin app from schema json.

### resource define

| property | description           |
| -------- | --------------------- |
| name     | name of the resource  |
| label    | label of the resource |

### field define

| property     | description                                 |
| ------------ | ------------------------------------------- |
| name         | resource field                              |
| label        | label show in list、edit、show、create page |
| component    | Text、 Boolean、Select、Reference           |
| showInList   | display in list page                        |
| showInShow   | display in show page                        |
| showInEdit   | display in edit page                        |
| showInCreate | display in create page                      |
| showInFilter | can filter                                  |
| sortable     | field sortable config in list page          |
| defaultValue | default value in create page                |

### component define

| property  | description                                                                                                                              |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Text      |                                                                                                                                          |
| Boolean   |                                                                                                                                          |
| Select    | choices: [{ id: 'programming', name: 'Programming' },{ id: 'lifestyle', name: 'Lifestyle' },{ id: 'photography', name: 'Photography' },] |
| Reference | reference: "users", referenceOptionText: "name",                                                                                         |

### demo

```json
[
  {
    "id": "e1",
    "name": "users",
    "label": "Users",
    "fields": [
      {
        "name": "id",
        "label": "ID",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      },
      {
        "name": "name",
        "label": "Name",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      }
    ]
  },
  {
    "id": "e3",
    "name": "todos",
    "label": "Todos",
    "fields": [
      {
        "name": "id",
        "label": "ID",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "sortable": true
      },
      {
        "name": "title",
        "label": "title",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      },
      {
        "name": "completed",
        "label": "completed",
        "component": "Boolean",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      }
    ]
  },
  {
    "id": "e2",
    "name": "posts",
    "label": "Posts",
    "fields": [
      {
        "name": "id",
        "label": "ID",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "sortable": true
      },
      {
        "name": "title",
        "label": "title",
        "component": "Text",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      },
      {
        "name": "userId",
        "label": "userId",
        "component": "Reference",
        "reference": "users",
        "referenceOptionText": "name",
        "showInList": true,
        "showInShow": true,
        "showInEdit": true,
        "showInCreate": true
      }
    ]
  }
]
```
