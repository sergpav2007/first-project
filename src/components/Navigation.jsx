import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar fixed-top navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">SHARETRADE.COM</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink end to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Articles
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink to="/comment" className="dropdown-item">Analyst’s Comment</NavLink></li>
              </ul>
            </li>
            <li className="nav-item"><NavLink to="/comment" className="nav-link">Analyst’s Comment</NavLink></li>
          </ul> */}
        </div>
      </div>
    </nav>
  )
};

export default Navigation;