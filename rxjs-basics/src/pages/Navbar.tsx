import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container text-white text-3xl flex flex-col justify-center space-y-5 items-center h-dvh bg-[#17153B]">
      <div>
        <NavLink className="nav-items" to="/grid1">
          Grid1
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/grid2">
          Grid2
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/flex1">
          Flex1
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/gridandflex1">
          Grid & Flex
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/error">
          Error Page
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/newpage">
          New Page
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/customProtocol">
        Custom Protocol
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
