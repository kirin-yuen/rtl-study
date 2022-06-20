import React, { createContext, useReducer } from "react";
import uuid from "uuid/v1";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export default function BookContextProvider({ children }) {
  const [books, dispatchBook] = useReducer(bookReducer, [
    { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 },
  ]);

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
