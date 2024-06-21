import React from "react";
import "../CSS/Navbar.css";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark p-2">
        <Link className="navbar-brand Logo_name ml-5" to="/">
          MedApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link link-name" to="/">
                Patient Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link link-name" to="/register">
                Patient Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link link-name" to="/doc-login">
                Doctor Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link link-name" to="/doc-register">
                Doctor Registration
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
