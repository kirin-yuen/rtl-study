import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function BookList() {
  return (
    // 使用 Consumer 进行数据使用
    <ThemeContext.Consumer>
      {/* 回调方法返回 jsx，context 就是共享的数据 */}
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <div
            className="book-list"
            style={{ color: theme.syntax, background: theme.bg }}
          >
            <ul>
              <li style={{ background: theme.ui }}>the way of kings</li>
              <li style={{ background: theme.ui }}>the name of the wind</li>
              <li style={{ background: theme.ui }}>the final empire</li>
            </ul>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
