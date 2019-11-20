import React from "react";

const Nav = props => {
  return (
    <header className="navigation" style={{ width: "80%" }}>
      <a className="logo" href="#Hero">
        BAND NAME
      </a>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a className="link" href="#MusicPlayer">
              Music
            </a>
          </li>
          <li>
            <a className="link" href="#Gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="link" href="#AboutUs">
              About Us
            </a>
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
