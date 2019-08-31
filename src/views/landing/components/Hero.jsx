import React from "react";

const heroStyles = {
  backgroundColor: "black",
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


const rightColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f6cd61"
};

const getStartedStyles = {
  height: "4rem",
  width: "20rem",
  fontSize: "2rem",
  backgroundColor: "#fff",
  color: "black",
  borderRadius: "2rem",
  border: "none",
  outline: "none"
};

export default function Hero() {
  return (
    <div style={heroStyles}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div style={leftColumnStyles}>6</div>
      <div style={rightColumnStyles}>
        <button style={getStartedStyles}>Get Started</button>
      </div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
    </div>
  );
}


