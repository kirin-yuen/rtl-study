import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

export default function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(({ id, title }) => (
          <li key={id} style={{ background: theme.ui }}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
