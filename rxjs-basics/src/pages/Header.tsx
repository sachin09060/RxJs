import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="Header-container text-xs sm:text-sm text-white flex flex-row justify-center space-x-8 items-center h-min w-full bg-[#17153B] sm:shrink-0">
      <div>
        <NavLink className="nav-items" to="/">
          Home
        </NavLink>
      </div>
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
          Reusable Component 1
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/customProtocol">
          Reusable Component 2
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
