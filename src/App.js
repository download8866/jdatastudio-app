import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "./dataProvider";
import { CRUDCreate, CRUDEdit, CRUDList, CRUDShow } from "./crud";
const schema = [
  {
    id: "e1",
    name: "users",
    label: "Users",
    r: true,
    c: true,
    u: true,
    d: true,
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
        showInCreate: true,
        showInFilter: true
      }
    ]
  },
  {
    id: "e3",
    name: "todos",
    label: "Todos",
    r: true,
    c: true,
    u: true,
    d: true,
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
    r: true,
    c: true,
    u: true,
    d: true,
    fields: [
      {
        name: "id",
        label: "ID",
        component: "Text",
        showInList: true,
        showInShow: true,
        sortable: true,
        showInFilter: true,
        alwaysOn: true
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
        showInCreate: true,
        showInFilter: true
      }
    ]
  }
];

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    {schema.map(resource => (
      <Resource
        name={resource.name}
        options={resource}
        list={resource.r ? CRUDList : null}
        edit={resource.u ? CRUDEdit : null}
        create={resource.c ? CRUDCreate : null}
        show={resource.r ? CRUDShow : null}
      />
    ))}
  </Admin>
);

export default App;
