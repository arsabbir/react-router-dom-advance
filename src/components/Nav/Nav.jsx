import React from "react";
import {  NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="container my-5 shadow">
        <div className="row">
          <div className="col">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink to="/"  className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact"  className="nav-link">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product"  className="nav-link">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/team"  className="nav-link">Team</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
