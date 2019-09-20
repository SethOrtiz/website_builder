import React from "react";
import Info from "./Info";

export default function ShowcaseA() {
  return (
    <section id="A" className="about">
      <div className="left-column"></div>
      <Info
        background="#111"
        fontColor="#fffef9"
        title="Express Yourself."
        content="Design and build your own high-quality websites. Whether you’re
          promoting a band, showcasing your work, selling merch or
          sharing your music with your fans, Hubstereo is here to help."
        linkOne={["Get Started", "#Hero","#fffef9"]}
        linkTwo={["Bands", "#B", "#fffef9"]}
      />
    </section>
  );
}
