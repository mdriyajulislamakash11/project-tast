import React from "react";
import { FaFaceAngry } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    { icon: <FaFaceAngry />, name: "Dashboard", path: "/dashboard" },
    { icon: <FaFaceAngry />, name: "About", path: "/about" },
    { icon: <FaFaceAngry />, name: "Profile", path: "/profile" },
    { icon: <FaFaceAngry />, name: "Settings", path: "/settings" },
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-bold 
      ${isActive ? "bg-green-700 text-white" : "text-gray-500  hover:text-white"}`;

  return (
    <div className="w-[310px] m-5 bg-base-100 rounded-lg shadow-md border border-gray-300">
      <ul className="menu gap-2 p-4">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={linkClass}>
              {item.icon} {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
