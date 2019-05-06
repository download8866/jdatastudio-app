import React from "react";
import {
  Datagrid,
  List,
  Pagination,
  ShowButton,
  EditButton
} from "react-admin";

import { renderField } from "./renderField";

const CRUDPagination = props => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

export const CRUDList = props => {
  const resource = props.options;
  return (
    <List {...props} pagination={<CRUDPagination />} title={resource.label}>
      <Datagrid>
        {resource.fields.filter(field => field.showInList).map(renderField)}
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};
