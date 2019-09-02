import React from "react";

const styles = {
  footer: {
    height: "20vh",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    backgroundColor: "#222",
    color: "#fff"
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "5%"
  },
  brand: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "10%",
    color: "#cecbcb",
    fontSize: "1.5rem"
  },
  header: {
    marginBottom: "0.3rem"
  },
  link: {
    color: "#eedbdb"
  }
};
export default function Footer() {
  return (
    <section style={styles.footer}>
      <div></div>
      <div style={styles.brand}>
        <h1>H</h1>
        <h1>U</h1>
        <h1>B</h1>
        <h1>S</h1>
        <h1>T</h1>
        <h1>E</h1>
        <h1>R</h1>
        <h1>E</h1>
        <h1>O</h1>
      </div>
      <div style={styles.wrapper}>
        <div>
          <h3 style={styles.header}>Community</h3>
          <ul>
            <li>
              <a style={styles.link} href="#H">
                Get Started
              </a>
            </li>
            <li>
              <a style={styles.link} href="#A">
                Solo Artists
              </a>
            </li>
            <li>
              <a style={styles.link} href="#B">
                Bands
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 style={styles.header}>Company</h3>
          <ul>
            <li>
              <a style={styles.link} href="#1">
                About Us
              </a>
            </li>
            <li>
              <a style={styles.link} href="#1">
                Get in Touch
              </a>
            </li>
            <li>
              <a style={styles.link} href="#1">
                Developers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 style={styles.header}>Support</h3>
          <ul>
            <li>
              <a style={styles.link} href="#1">
                Help Desk
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
}
