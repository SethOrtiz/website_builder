import React from "react";
import { withRouter } from "react-router-dom";
import Info from "./Info";

const Hero = props => {
  return (
    <section id="Hero" className="hero">
      <Info
        fontColor="#fffef9"
        title="New Album Out Now"
        content="Lorem ipsum, Incidunt vel, obcaecati ipsum, corrupti nemo, saepe odio molestias qui. Commodi sit doloribus est eaque!"
      />
      <div
        className="right-column"
        style={{
          backgroundImage: `url(${props.bgImage})`
        }}
      >
        <a href="#MusicPlayer">
          <button className="get-started">Listen</button>
        </a>
      </div>
    </section>
  );
};
export default withRouter(Hero);
