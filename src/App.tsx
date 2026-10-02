import { Routes, Route } from "react-router";
import {
  About,
  Contact,
  Home,
  Login,
  Product,
  Products,
  Register,
} from "./page";
import "./App.css";
import MainLayout from "./layout";

function App() {
  return (
    <div className="app ">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
