import React from "react";
import logo from "../assets/amdocs-logo.png";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
 
  render() {
    return (
      <>
          <nav
            style={{ borderBottom: "1px solid purple" }}
            className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between"
          >
            <a className="navbar-brand p-0" href="#">
              <img src={logo} className="" style={{ height: "23px" }} />
            </a>
            <a className="nav-link m-0" style={{ color: "teal" }} href="#">
              <Link to="/">Logout</Link>
            </a>
          </nav>
       
      </>
    );
  }
}
