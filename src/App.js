import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Layout from "./common/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route
            path="*"
            element={
              <>
                <div>없는 페이지입니다</div>
                <Link to="/">홈으로 이동</Link>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
