# jdatastudio-app

## create a react-admin app from schema json.

```json
[
  {
    id: "e1",
    name: "users",
    label: "Users",
    fields: [
      {
        name: "id",
        label: "ID",
        component: "Text",
        showInList: true,
        showInShow: true,
        showInEdit: true,
        showInCreate: true
      },
      {
        name: "name",
        label: "Name",
        component: "Text",
        showInList: true,
        showInShow: true,
        showInEdit: true,
        showInCreate: true
      }
    ]
  },
  {
    id: "e3",
    name: "todos",
    label: "Todos",
    fields: [
      {
        name: "id",
        label: "ID",
        component: "Text",
        showInList: true,
        showInShow: true,
        sortable: true
      },
      {
        name: "title",
        label: "title",
        component: "Text",
        showInList: true,
        showInShow: true,
        showInEdit: true,
        showInCreate: true
      },
      {
        name: "completed",
        label: "completed",
        component: "Boolean",
        showInList: true,
        showInShow: true,
        showInEdit: true,
        showInCreate: true
      }
    ]
  },
  {
    id: "e2",
    name: "posts",
    label: "Posts",
    fields: [
      {
        name: "id",
        label: "ID",
        component: "Text",
        showInList: true,
        showInShow: true,
        sortable: true
      },
      {
        name: "title",
        label: "title",
        component: "Text",
        showInList: true,
        showInShow: true,
        showInEdit: true,
        showInCreate: true
      },
      {
        name: "userId",
        label: "userId",
        component: "Reference",
        reference: "users",
        referenceOptionText: "name",
        showInList: true,
        showInShow: true,
        showInEdit: true,
        showInCreate: true
      }
    ]
  }
]
```
