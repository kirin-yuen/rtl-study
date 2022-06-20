import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

export default function BookDetails({ book }) {
  const { dispatchBook } = useContext(BookContext);
  const { id, title, author } = book;

  return (
    <li onClick={() => dispatchBook({ type: "REMOVE_BOOK", id })}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  );
}
