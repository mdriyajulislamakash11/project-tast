import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/image.png";
import { RiCustomerService2Line } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="">
            <img className="h-20 md:mx-24" src={logo} alt="" />
          </div>
        </div>


        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="indicator gap-3">
              <div className="flex justify-center gap-3 mr-5">
                {/* icon 1 */}
                <div className="rounded-full p-3 border">
                  <RiCustomerService2Line className="h-10 w-10" />
                </div>
                <div className="rounded-full p-3 border">
                  <CiBellOn className="h-10 w-10" />
                </div>
              </div>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

{/*  */}
        <div>
          <button>Acme... </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
