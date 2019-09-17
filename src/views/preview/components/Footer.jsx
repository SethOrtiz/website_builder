import React from "react";
const styles = {
  footer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    color: "#fffef9",
    margin: "auto",
    backgroundColor: "rgba(0,0,0,.9)",
    height: "100%",
    position: "relative",
    zIndex: "1"
  },
  social: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#fffef9",
    fontSize: "1.5rem"
  },
  header: {
    marginBottom: "0.3rem"
  },
  links: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    justifyContent: "space-around",
    fontSize: "1.2rem",
    padding: "5%"
  },
  bgImage: {
    height: "100%",
    backgroundImage: "linear-gradient(45deg, #111, #999, #999, #fffef9)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  container: {
    backgroundColor: "#111"
  }
};
export default function Footer() {
  return (
    <div style={styles.container}>
      <div id="bgImage" style={styles.bgImage}></div>
      <section style={styles.footer}>
        <div style={styles.social}>
          <div className="sphere"></div>
          <div className="sphere"></div>
          <div className="sphere"></div>
        </div>
        <div style={styles.links}>
          <div>
            <h3 style={styles.header}>Donate</h3>
          </div>
          <div>
            <h3 style={styles.header}>Booking</h3>
            <div>Manager: Jane Doe</div>
            <div>Email: Placeholder@email.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}
