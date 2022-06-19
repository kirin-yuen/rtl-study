import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContextProvider";

export default function Navbar() {
  const {
    books: { length },
  } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {length} books to get through...</p>
    </div>
  );
}
