import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

export default function About() {
  // v6 useNavigate 取代 useHistory
  const navigate = useNavigate();

  return (
    <div>
      About....
      <button
        onClick={() => {
          // navigate 取代了 history.push
          navigate("/test");
        }}
      >
        Navigate to Test
      </button>
      {/* v6 路由嵌套路径相对上一级而言 */}
      {/* 此处即 /about/offer */}
      {/* 包括路径 v5 useRouteMatch 的 path 也不需要 */}
      <Routes>
        <Route path="/offer" element={<h1>offers....</h1>} />
      </Routes>
    </div>
  );
}
