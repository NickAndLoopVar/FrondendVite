import React from "react";

const Header = () => {
  return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
             Home
          </a>
          <button
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  aria-current="page"
                  className="nav-link active"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/clientes">
                  Clientes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/proyectos">
                  Proyectos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
