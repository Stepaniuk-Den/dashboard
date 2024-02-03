import React, { Suspense, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
// import MainPage from "../../pages/MainPage";

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

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

  useEffect(() => {
    if (!selectedCategory) {
      navigate("/");
    }
  }, [selectedCategory, navigate]);

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
