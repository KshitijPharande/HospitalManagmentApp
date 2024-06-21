import React from "react";
import { Link } from "react-router-dom";
import logoImage from "./hamb.png"; // Import your logo image

export default function Nav_dashboard({ toggleSidebar }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark p-2">
        <Link className="navbar-brand Logo_name ml-5" to="#">
          <h4>MedApp</h4>
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

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {/* Replace the button with an image */}
              <img src={logoImage} alt="Menu" className="menu-icon" style={{ height: "30px", cursor: "pointer" }} onClick={toggleSidebar} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
