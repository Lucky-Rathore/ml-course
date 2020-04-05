import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Header() {
  return (
    <header
      className="site-navbar py-4 js-sticky-header site-navbar-target"
      role="banner"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-xl-2">
            <h1 className="mb-0 site-logo">
              <a href="/" className="h2 mb-0" >
                learnings<span className="text-primary">.</span>
              </a>
            </h1>
          </div>
          
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Pricing">Pricing</Link></li>
                  <li><Link to="/FAQ">FAQ</Link></li>
                  <li><Link to="/Contact-Us">Contact Us</Link></li>
                </ul>
              </nav>
            </div>
          <div
            className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
            style={{ position: "relative", top: 3 }}
          >
            <a href="#" className="site-menu-toggle js-menu-toggle float-right">
              <span className="icon-menu h3" />
            </a>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;
