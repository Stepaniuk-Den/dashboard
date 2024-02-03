import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainPage = () => {
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

  // useEffect(() => {
  //   if (!selectedCategory) {
  //     navigate("/");
  //   }
  // }, [selectedCategory, navigate]);

  return (
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
  );
};

export default MainPage;
