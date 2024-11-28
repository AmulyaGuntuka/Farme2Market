import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./NavbarRegistered.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/homepage-registeredusers">
          <img
            src={process.env.PUBLIC_URL + "/Navbar/logoc.png"}
            alt=""
            className="navbar-icon"
          />
        </Link>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="home">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="menu dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/homepage-registeredusers"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/regfarmer">
                    Farmer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/regseller">
                    Seller
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/deliveryman">
                    Deliveryman
                  </Link>
                </li>
              </ul>
            </li>
            <li className="about">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="profile" to="/profile"> {/* Changed to Link */}
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="cartitem" to="/cart">
                <img
                  src={process.env.PUBLIC_URL + "/Navbar/cart.png"}
                  alt=""
                  className="cart"
                />
              </Link>
            </li>

            <li className="nav-item">
              <Link className="login" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;   
