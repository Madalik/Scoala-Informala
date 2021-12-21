import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5J28_WQyP9SwcKLRsNmyVfcWP9m54TclUaA&usqp=CAU"
            alt=""
            height="90"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Add Recipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
