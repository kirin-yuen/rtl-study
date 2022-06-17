import React, { createContext, useState } from "react";

// 创建 Context
export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });
  const [dark, setDark] = useState({ syntax: "#ddd", ui: "#333", bg: "#555" });

  return (
    // .Provider 前需要命名跟 createContext 保存的变量一致
    <ThemeContext.Provider
      // value 存放 context 数据（包括修改数据的方法），以供使用
      value={{ isLightTheme, setIsLightTheme, light, setLight, dark, setDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
