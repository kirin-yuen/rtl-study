import React from "react";
import { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    { id: 1, name: "Football" },
    { id: 2, name: "Basketball" },
    { id: 3, name: "Volleyball" },
  ]);

  const ProductDetail = () => {
    const { id } = useParams();

    const found = products.find((item) => item.id === +id);

    return (
      <div>
        <h3>Detail</h3>
        <hr />
        {id} - {found && found.name}
      </div>
    );
  };

  return (
    <>
      <h3>Product List</h3>
      {products.map((item) => (
        <div onClick={() => navigate(`/products/${item.id}/detail`)}>
          {item.id} - {item.name}
        </div>
      ))}
      <Routes>
        <Route path="/:id/detail" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
