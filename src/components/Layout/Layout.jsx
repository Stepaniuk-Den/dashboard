import React, { Suspense, useState } from "react";
import Loader from "../Loader/Loader";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
// import MainPage from "../../pages/MainPage";

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "dashboards",
    "product",
    "customers",
    "income",
    "promote",
    "help",
  ];

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="page_container">
          <Sidebar
            categories={categories}
            onSelectedCategory={handleSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <div className="page_category">
            <p className="page_category_greeting">Hello Evano 👋🏼,</p>
            <Outlet />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
