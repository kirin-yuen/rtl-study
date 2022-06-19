import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleThemeButton from "./components/ToggleThemeButton";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      {/* 多个 context 包裹没有分先后顺序 */}
      <AuthContextProvider>
        {/* 组件里需要使用到 context 中的数据，则需要包裹在 Provider 里 */}
        <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleThemeButton />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
