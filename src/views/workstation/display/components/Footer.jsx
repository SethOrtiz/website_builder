import React from "react";
const styles = {
  footer: {
    display: "grid",
    gridTemplateColumns: "1fr 5fr 5fr 1fr",
    color: "#fffef9",
    margin: "auto",
    backgroundColor: "rgba(0,0,0,.9)",
    height: "100%",
    position: "relative",
    top: "-50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1"
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "5%"
  },
  brand: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10%",
    color: "#fffef9",
    fontSize: "1.5rem"
  },
  header: {
    marginBottom: "0.3rem"
  },
  link: {
    color: "fffef9"
  },
  bgImage: {
    height: "100%",
    backgroundImage: "linear-gradient(45deg, #111, #999, #999, #fffef9)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "blur(2px)"
  },
  container: {
    height: "12vh",
    backgroundColor: "#111"
  }
};
export default function Footer() {
  return (
    <div style={styles.container}>
      <div id="bgImage" style={styles.bgImage}></div>
      <section style={styles.footer}>
        <div></div>
        <div style={styles.brand}>
          <div>Follow Us:</div>
          <div className="sphere"></div>
          <div className="sphere"></div>
          <div className="sphere"></div>
          <div className="sphere"></div>
        </div>
        <div style={styles.wrapper}>
          <div>
            <h3 style={styles.header}>Merch</h3>
          </div>
          <div>
            <h3 style={styles.header}>Support</h3>
          </div>
          <div>
            <h3 style={styles.header}>Booking</h3>
            <div>Manager: Jane Doe</div>
            <div>Email: Placeholder@email.com</div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
