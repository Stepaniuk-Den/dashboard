import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Product = lazy(() => import("./components/Product"));
const Customers = lazy(() => import("./components/Customers"));
const Income = lazy(() => import("./components/Income"));
const Promote = lazy(() => import("./components/Promote"));
const Help = lazy(() => import("./components/Help"));

function App() {
  const categories = [
    "Dashboard",
    "Product",
    "Customers",
    "Income",
    "Promote",
    "Help",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryComponent = (category) => {
    switch (category) {
      case "Dashboard":
        return <Dashboard />;
      case "Product":
        return <Product />;
      case "Customers":
        return <Customers />;
      case "Income":
        return <Income />;
      case "Promote":
        return <Promote />;
      case "Help":
        return <Help />;
      default:
        return null;
    }
  };

  // useEffect(() => {
  //   if (!selectedCategory) {
  //     window.location.href = "/";
  //   }
  // }, [selectedCategory]);

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div className="page_container">
          <Sidebar
            categories={categories}
            onSelectedCategory={handleSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <div className="page_category">
            <p className="page_category_greeting">Hello Evano 👋🏼,</p>
            <Routes>
              {/* <Route path="/" element={<Layout />}> */}
              <Route index element={<Layout />} />
              <Route
                path="/:category"
                element={getCategoryComponent(selectedCategory)}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
              {/* </Route> */}
            </Routes>
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
