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
        <Route path="/enterprize" element={<Enterprize></Enterprize>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/resources" element={<Resources></Resources>}></Route>
        <Route path="/singup.jsx" element={<SignUp></SignUp>}></Route>
        <Route path="/singin" element={<SignIn></SignIn>}></Route>
        <Route path="/solutions" element={<Solutions></Solutions>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default AllRoutes;
