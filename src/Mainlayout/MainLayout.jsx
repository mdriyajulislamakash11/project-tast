import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "./Menu";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <div className="flex ">
        <div>
          <Menu />
        </div>
        <div className="flex my-5 p-5 bg-base-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
