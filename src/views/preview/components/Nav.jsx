import React from "react";

const Nav = props => {
  return (
    <header>
      <h1 className="logo">Band Name</h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a href="#1">Share</a>
          </li>
          <li>
            <a href="#1">About</a>
          </li>
          <li>
            <a href="#1">Listen</a>
          </li>
          <li>
            <a href="#1">Support</a>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Nav;
