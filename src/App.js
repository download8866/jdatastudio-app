import React, { Fragment } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "./dataProvider";
import { authProvider, httpClient } from "./authProvider";
import { CRUDCreate, CRUDEdit, CRUDList, CRUDShow } from "./crud";
const url = "https://www.jdatastudio.com";
const fetchResources = permissions =>
  httpClient(url + "/schemas")
    .then(response => {
      return response.json;
    })
    .then(json => {
      let resources = [];
      json.map(resource =>
        resources.push(
          <Resource
            key={resource.id}
            name={"api/" + resource.eid}
            options={resource}
            list={resource.r ? CRUDList : <Fragment />}
            edit={resource.u ? CRUDEdit : <Fragment />}
            create={resource.c ? CRUDCreate : null}
            show={resource.r ? CRUDShow : <Fragment />}
          />
        )
      );
      return resources;
    })
    .catch(error => {
      if (error.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("permissions");
        window.location.replace("/#/login");
      }
    });

const dataProvider = jsonServerProvider(url, httpClient);

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    {fetchResources}
  </Admin>
);

export default App;
