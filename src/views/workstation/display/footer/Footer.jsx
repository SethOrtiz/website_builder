import React from "react";
const styles = {
  footer: {
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    backgroundColor: "#111",
    color: "#fffef9"
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
    color: "#fffef9",
    fontSize: "1.5rem"
  },
  header: {
    marginBottom: "0.3rem"
  },
  link: {
    color: "dddef9"
  }
};
export default function Footer() {
  return (
    <section style={styles.footer}>
      <div></div>
      <div style={styles.brand}>
        Insert Logo
      </div>
      <div style={styles.wrapper}>
        <div>
          <h3 style={styles.header}>Community</h3>
          <ul>
            <li>
              <a style={styles.link} href="#H">
                Facebook
              </a>
            </li>
            <li>
              <a style={styles.link} href="#A">
                Instagram
              </a>
            </li>
            <li>
              <a style={styles.link} href="#B">
                itunes
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 style={styles.header}>Fan Club</h3>
        </div>
        <div>
          <h3 style={styles.header}>Support</h3>
        </div>
      </div>
      <div></div>
    </section>
  );
}
