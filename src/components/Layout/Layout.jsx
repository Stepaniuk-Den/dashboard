import Loader from "../Loader/Loader";
import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
// import Dashboard from "../Dashboard";
// import Product from "../Product";
// import Customers from "../Customers";
// import Income from "../Income";
// import Promote from "../Promote";
// import Help from "../Help";
// import { StyledHeader, StyledMain } from './Layout.styled';

// import Navigation from "components/Navigation/Navigation";

const Layout = () => {
  // const categories = [
  //   "Dashboard",
  //   "Product",
  //   "Customers",
  //   "Income",
  //   "Promote",
  //   "Help",
  // ];
  // const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // const handleSelectedCategory = (category) => {
  //   setSelectedCategory(category);
  // };

  // const getCategoryComponent = (category) => {
  //   switch (category) {
  //     case "Dashboard":
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
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <div className="page_container">
          <Sidebar
            categories={categories}
            onSelectedCategory={handleSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <div className="page_category">
            <p className="page_category_greeting">Hello Evano 👋🏼,</p>
          </div>
        </div> */}
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
