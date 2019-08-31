import React from "react";

const footerStyles = {
  height: "17vh",
  display: "grid",
  gridTemplateColumns: "1fr 5fr 5fr 1fr",
  backgroundColor: "black",
  color: "#fff"
};

const wrapperStyles = {
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "0.6rem"
};

const headerStyles = {
    marginBottom: "0.3rem"
}

export default function Footer() {
  return (
    <section style={footerStyles}>
      <div></div>
      <div style={wrapperStyles}>
        <h1>Hubstereo</h1>
      </div>
      <div style={wrapperStyles}>
        <div>
          <h3 style={headerStyles}>Community</h3>
          <ul>
            <li>
              <a href="#hero">Bands</a>
            </li>
            <li>
              <a href="#A">Solo Artists</a>
            </li>
            <li>
              <a href="#B">Managers</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 style={headerStyles}>Company</h3>
          <ul>
            <li>
              <a href="#1">About Us</a>
            </li>
            <li>
              <a href="#1">Get in Touch</a>
            </li>
            <li>
              <a href="#1">Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
}
