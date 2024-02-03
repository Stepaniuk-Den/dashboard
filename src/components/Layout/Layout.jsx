// import Loader from "../Loader/Loader";
import React from "react";
// import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default Layout;
