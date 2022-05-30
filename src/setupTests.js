// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

// 查看虚拟界面的方法
export const debugTool = (length = 30000) => {
  screen.debug(undefined, length);
};

export const sleep = async (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));
