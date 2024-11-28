import React from "react";
import "./Navbar.css";

function Navbar({ scrollToWelcome }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={process.env.PUBLIC_URL + "/Navbar/logoc.png"}
            alt=""
            className="navbar-icon"
          />
          
          <b><i>Farm2Market</i></b>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="home">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="menu dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <b> Menu</b>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/farmer">
                    Farmer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/seller">
                    Consumer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/deliveryman">
                    Delivery Services
                  </a>
                </li>
              </ul>
            </li>

            <li className="about">
              <button
                className="nav-link"
                onClick={scrollToWelcome}
                style={{ background: "none", border: "none",  color: "inherit", cursor: "pointer" }}
              >
              <b> About</b>
              </button>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="cartitem" href="/register">
                <img
                  src={process.env.PUBLIC_URL + "/Navbar/cart.png"}
                  alt=""
                  className="cart"
                />
              </a>
            </li>

            <li className="nav-item">
              <a className="login" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;