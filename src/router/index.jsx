import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import React from "react";
import About from "../components/About";
import Products from "../components/Products";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <Router>
      <div className="link-group">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/redirect">Test</Link>
      </div>
      {/* v6 Routes 取代 Switch */}
      <Routes>
        {/* v6
         * Route 不需要指定 exact，因为默认行为就是 exact match
         * element 取代 component，并且不能使用 v5 <Route><Component /></Route> 的模式
         * element 值不再是 v5 的实例引用，而是 jsx 语法， element={<Component />} 取代 component={Component}
         */}
        <Route path="/" element={<Home />} />
        {/* v6 嵌套路由需要加上通配符 */}
        <Route path="/about/*" element={<About />} />
        <Route path="/products/*" element={<Products />} />
        {/* v6 Navigate 取代 Redirect */}
        <Route path="/redirect" element={<Navigate to="/test" />} />
        {/* element 里可以使用表达式 */}
        <Route
          path="/test"
          element={false ? <div>test1</div> : <div>test2</div>}
        />
      </Routes>
    </Router>
  );
}
