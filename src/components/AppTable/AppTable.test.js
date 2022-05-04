import React, { useRef } from "react";
import { screen, render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import AppTable from ".";
let tableRef;

const MockAppTable = (props) => {
  let { data, columns } = props;
  tableRef = useRef(null);

  if (!data) {
    data = (query) => {
      return new Promise((resolve, reject) => {
        resolve({
          data: [{ name: "Allen" }],
          page: 0,
          totalCount: 1,
        });
      });
    };
  }

  if (!columns) {
    columns = [
      {
        title: "Name",
        field: "name",
      },
    ];
  }

  return <AppTable data={data} columns={columns} tableRef={tableRef}></AppTable>;
};

const renderTableAfter = async () => {
  return waitForElementToBeRemoved(queryNoDisplayElement());
};

const NO_DISPLAY = "No records to display";
const queryNoDisplayElement = () => {
  return screen.queryByText(NO_DISPLAY);
};

describe("MockAppTable component initial", () => {
  test(`should '${NO_DISPLAY}' element appear`, async () => {
    render(<MockAppTable />);
    const noDisplayElement = await waitFor(() => queryNoDisplayElement());

    // 渲染表格前会出现没有记录的元素
    expect(noDisplayElement).toBeInTheDocument();
  });

  test(`should '${NO_DISPLAY}' element disappear`, async () => {
    render(<MockAppTable />);

    // 渲染完成
    await renderTableAfter();

    // 渲染表格后没有记录的元素会消失
    expect(queryNoDisplayElement()).not.toBeInTheDocument();
  });
});
