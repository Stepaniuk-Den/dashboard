import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Product = lazy(() => import("./components/Product"));
const Customers = lazy(() => import("./components/Customers"));
const Income = lazy(() => import("./components/Income"));
const Promote = lazy(() => import("./components/Promote"));
const Help = lazy(() => import("./components/Help"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Product" element={<Product />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Income" element={<Income />} />
          <Route path="Promote" element={<Promote />} />
          <Route path="Help" element={<Help />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
