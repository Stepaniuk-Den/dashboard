import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/Loader/Loader";

const Customers = lazy(() => import("./components/Customers/Customers"));
const Product = lazy(() => import("./components/Product/Product"));
const Income = lazy(() => import("./components/Income/Income"));
const Promote = lazy(() => import("./components/Promote/Promote"));
const Help = lazy(() => import("./components/Help/Help"));

function App() {
  const categories = ["Product", "Customers", "Income", "Promote", "Help"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryComponent = (category) => {
    switch (category) {
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

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div className="page_container">
          <Sidebar
            categories={categories}
            onSelectedCategory={handleSelectedCategory}
          />
          <div className="page_category">
            <p className="page_category_greeting">Hello Evano 👋🏼,</p>
            <Routes>
              <Route
                path="/:category"
                element={getCategoryComponent(selectedCategory)}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
