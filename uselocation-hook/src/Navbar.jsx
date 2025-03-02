import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;