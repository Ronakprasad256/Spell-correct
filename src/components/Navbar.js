import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const logoStyle = {
        width: 40,
  };
  
  const navStyle = {
        marginTop: "80px",
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid navbar-brand">
        <div className="logos">
          <img style={logoStyle} src="Spelllogo.png" alt="logo" />
          <Link style={navStyle} className="navbar-brand" to="/">
            {props.title}
          </Link>
        </div>
        <button
          className="navbar-toggler text-success bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-secondary"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary text-light" type="submit">Search</button>
          </form> */}
          <div
            className={`nav-item form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label navbar-${props.mode}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.darkMode}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Add title here',
};
