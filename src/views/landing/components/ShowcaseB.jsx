import React from "react";

const showcaseBStyles = {
  backgroundColor: "#cbdadb",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 5fr 5fr 1fr" ,
  gridTemplateRows: "1fr 10fr 1fr"
};

const leftColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#cecbcb"
};

const rightColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#eedbdb"
};

export default function ShowcaseB() {
  return (
    <div style={showcaseBStyles}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div style={leftColumnStyles}>6</div>
    <div style={rightColumnStyles}>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    </div>
  );
}
