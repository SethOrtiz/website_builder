import React from "react";
import Info from "./Info";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
const showcaseBStyles = {
  backgroundColor: "#fffef9",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 5fr 5fr 1fr",
  gridTemplateRows: "1fr 10fr 1fr"
};


const rightColumnStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffefd7",
};

export default function ShowcaseB() {
  return (
    <section id="B" style={showcaseBStyles}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Info
        background="#ffefd7"
        fontColor="#000"
        title="Be Heard."
        content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
        linkOne={["Get Started", "#H", "000"]}
        linkTwo={["Solo Artists", "#A", "#000"]}
      />
      <div style={rightColumnStyles}></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
}
