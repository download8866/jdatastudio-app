import React from "react";
import {
  Show,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  Datagrid,
  ShowButton
} from "react-admin";
import { renderField } from "./renderField";
export const CRUDShow = props => {
  const resource = props.options;
  return (
    <Show {...props} title={resource.label}>
      <TabbedShowLayout>
        <Tab label="Detail">
          {resource.fields.filter(field => field.showInShow).map(renderField)}
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};
