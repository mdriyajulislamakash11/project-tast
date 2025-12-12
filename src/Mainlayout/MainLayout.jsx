import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "./Menu";

const MainLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <div className="flex ">
        <div>
          <Menu />
        </div>
        <div className="flex-1 my-5 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
