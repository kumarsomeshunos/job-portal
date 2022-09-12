import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="images/navbarlogo.jpeg"
            alt=""
            width="300"
            height="60"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Apply
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/stories">
              Openings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin">
              Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;