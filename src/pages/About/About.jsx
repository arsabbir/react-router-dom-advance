import React from "react";
import { Link, Outlet } from "react-router-dom";
import Gall from "../../components/Gall/Gall";
import Nav from "../../components/Nav/Nav";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav />
            <h1>About Page</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="oneplus">Oneplus</Link>
              </li>
              <li className="list-group-item">
                <Link to="apple">Apple</Link>
              </li>
              <li className="list-group-item">
                <Link to="asus">Asus</Link>
              </li>
              <li className="list-group-item">
                <Link to="samsung">Samsung</Link>
              </li>
              <li className="list-group-item">
                <Link to="google-pixel">Google Pixel</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
