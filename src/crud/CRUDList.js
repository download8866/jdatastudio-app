import React from "react";
import {
  Datagrid,
  List,
  Pagination,
  ShowButton,
  EditButton,
  Filter,
  alwaysOn
} from "react-admin";

import { renderField } from "./renderField";
import { renderInput } from "./renderInput";
const CRUDPagination = props => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

export const CRUDList = props => {
  const resource = props.options;
  return (
    <List
      {...props}
      pagination={<CRUDPagination />}
      filters={<CRUDFilter {...props} />}
      title={resource.label}
    >
      <Datagrid>
        {resource.fields.filter(field => field.showInList).map(renderField)}
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

/**
 * filter
 * contains all the domain and the full text search input
 * @param props
 * @constructor
 */
const CRUDFilter = props => {
  const resource = props.options;
  return (
    <Filter {...props}>
      {resource.fields.filter(field => field.showInFilter).map(renderFilter)}
    </Filter>
  );
};

const renderFilter = field => {
  field.isFilter = true;
  let filter = renderInput(field);
  field.isFilter = false;
  if (field.alwaysOn) {
    return React.cloneElement(filter, { alwaysOn: true });
  }
  return filter;
};
