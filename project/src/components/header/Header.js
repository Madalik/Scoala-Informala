import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/header/travel.jpg";


function Header() {
  return (
    <>
      <nav className="navbar navbar-expand ">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="" height="90"></img>
          </Link>
          <h1>The Orange blog</h1>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <Link to="/">All titles</Link>
              <Link to="/create">Add Blog</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
