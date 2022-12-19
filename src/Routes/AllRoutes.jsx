import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import Enterprize from "../Pages/Enterprize";
import ContactSales from "../Pages/ContactSales";
import NotFound from "../Pages/NotFound";
import Pricing from "../Pages/Pricing";
import Product from "../Pages/Product";
import Resources from "../Pages/Resources";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Solutions from "../Pages/Solutions";
import Footer from "../Components/Footer";
import ProductIntegration from "../Pages/ProductIntegration";
import Checkout from "../Pages/Checkout";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/contactsales"
          element={<ContactSales></ContactSales>}
        ></Route>
        <Route path="/enterprize" element={<Enterprize />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/solutions" element={<Solutions />}></Route>
        <Route path="/integration" element={<ProductIntegration />}></Route>
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
