import React, { Suspense } from "react";
import Loader from "../Loader/Loader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
