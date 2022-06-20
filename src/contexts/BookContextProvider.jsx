import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export default function BookContextProvider({ children }) {
  const [books, dispatchBook] = useReducer(
    bookReducer,
    JSON.parse(localStorage.getItem("books"))
  );

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider
      value={{
        books,
        dispatchBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
