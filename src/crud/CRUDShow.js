import React, { Fragment } from "react";
import {
  Show,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  Datagrid,
  ShowButton,
  EditButton
} from "react-admin";
import { renderField } from "./renderField";
export const CRUDShow = props => {
  const resource = props.options;
  return (
    <Show {...props} title={resource.label}>
      <TabbedShowLayout>
        <Tab label="Detail">
          {resource.fields.filter(field => field.showInShow).map(renderField)}
          {resource.related ? resource.related.map(renderRelation) : null}
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

const renderRelation = entity => (
  <ReferenceManyField
    key={"rl" + entity.id}
    reference={entity.name}
    target={entity.relatedTarget}
    addLabel={false}
    perPage={100}
  >
    <Datagrid>
      {entity.fields.filter(field => field.showInList).map(renderField)}
      <ShowButton />
      {entity.u ? <EditButton /> : <Fragment />}
    </Datagrid>
  </ReferenceManyField>
);
