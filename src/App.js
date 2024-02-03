import React, { lazy } from "react";
// import React, { lazy, useEffect, useState } from "react";
// import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./components/Layout/Layout";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Product = lazy(() => import("./components/Product"));
const Customers = lazy(() => import("./components/Customers"));
const Income = lazy(() => import("./components/Income"));
const Promote = lazy(() => import("./components/Promote"));
const Help = lazy(() => import("./components/Help"));

function App() {
  // const categories = [
  //   "Dashboards",
  //   "Product",
  //   "Customers",
  //   "Income",
  //   "Promote",
  //   "Help",
  // ];
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const navigate = useNavigate();

  // const handleSelectedCategory = (category) => {
  //   setSelectedCategory(category);
  // };

  // const getCategoryComponent = (category) => {
  //   switch (category) {
  //     case "Dashboards":
  //       return <Dashboard />;
  //     case "Product":
  //       return <Product />;
  //     case "Customers":
  //       return <Customers />;
  //     case "Income":
  //       return <Income />;
  //     case "Promote":
  //       return <Promote />;
  //     case "Help":
  //       return <Help />;
  //     default:
  //       return null;
  //   }
  // };

  // useEffect(() => {
  //   if (!selectedCategory) {
  //     navigate("/");
  //   }
  // }, [selectedCategory, navigate]);

  return (
    <div className="page_container">
      <Sidebar
      // categories={categories}
      // onSelectedCategory={handleSelectedCategory}
      // selectedCategory={selectedCategory}
      />
      <div className="page_category">
        <p className="page_category_greeting">Hello Evano 👋🏼,</p>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Layout />}></Route> */}
            <Route index element={<Dashboard />} />
            {/* <Route
          path="/:category"
          element={getCategoryComponent(selectedCategory)}
        ></Route> */}
            <Route path="/dashboards" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/help" element={<Help />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
