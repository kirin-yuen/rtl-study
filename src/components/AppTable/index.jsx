import React from "react";
import MTableCore from "@material-table/core";
import Title from "./Title";

export default function AppTable(props) {
  const { tableRef, columns, data } = props;

  return (
    <>
      <Title />
      <MTableCore tableRef={tableRef} columns={columns} data={data}></MTableCore>
    </>
  );
}
