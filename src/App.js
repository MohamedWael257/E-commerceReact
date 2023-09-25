import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./component/navbar/NavBar"
import HomePage from "./pages/home/Homepage";
import RegisterPage from "./pages/register/Registerpage";
import LoginPage from "./pages/login/Loginpage"
import Productspage from "./pages/products/Productspage";
import OrderPage from "./pages/orders/Orderpage"
import CartPage from "./pages/cart/Cartpage";
import Footer from "./component/footer/Footer";
import Chechoutpage from "./pages/checkout/Checkoutpage";
import Orderdetails from "./component/order/Orderdetails";
import Productdetails from "./component/product/productsdetail/Productdetails";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/slice/productslice";
import { getorders } from "./redux/slice/orderslice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getorders());
  }, [dispatch])
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Products" element={<Productspage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Chechout" element={<Chechoutpage />} />
          <Route path="/Orders" element={<OrderPage />} />
          <Route path='/orderdetails/:id' element={<Orderdetails />} />
          <Route path='/productdetails/:id' element={<Productdetails />} />
          <Route exact path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;