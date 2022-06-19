import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

export default function BookDetails({ book }) {
  const { removeBook } = useContext(BookContext);
  const { id, title, author } = book;

  return (
    <li onClick={() => removeBook(id)}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  );
}
