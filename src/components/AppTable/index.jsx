import React from "react";
import MTableCore from "@material-table/core";

export default function AppTable(props) {
  const { tableRef, columns, data } = props;

  return <MTableCore tableRef={tableRef} columns={columns} data={data}></MTableCore>;
}
