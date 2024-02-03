import React, { Suspense } from "react";
import Loader from "../Loader/Loader";
import { Outlet } from "react-router-dom";
// import MainPage from "../../pages/MainPage";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <MainPage /> */}
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
