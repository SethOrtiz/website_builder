import React from "react";
import SignUp from "./SignUp"

const heroStyles = {
  backgroundColor: "#777",
  color: "#555",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 5fr 5fr 1fr",
  gridTemplateRows: "1fr 10fr 1fr"
};

const leftColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#3da4ab"
};

// const rightColumnStyles = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: "#f6cd61"
// };

// const getStartedStyles = {
//     padding: "0.8rem 2rem",
//   fontSize: "2rem",
//   backgroundColor: "#fff",
//   color: "black",
//   borderRadius: "2rem",
//   border: "none",
//   outline: "none",
//   textAlign: "center"
// };


export default function Hero() {
  return (
    <section id="hero" style={heroStyles}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div style={leftColumnStyles}>6</div>
      <SignUp/>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
    </section>
  );
}
      // <div style={rightColumnStyles}>
      //   <button style={getStartedStyles} className="link">
      //     Get Started
      //   </button>
      // </div>