import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../src/Component/Navbar";
import HomePage from "./Component/Home Page/HomePage";
import CartPage from "../src/Component/Cart Page/CartPage";
import ProductFilterPage from "./Component/Filter Page/ProductFilterPage";
import ProductPage from "./Component/Product Page/ProductPage";
import PaymentPage from "./Component/Payment Page/PaymentPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />

        <Route path="/homePage" element={<HomePage />} />

        <Route path="/productFilterPage" element={<ProductFilterPage />} />

        <Route path="/productPage/:id" element={<ProductPage />} />

        <Route path="/paymentPage" element={<PaymentPage />} />

        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
