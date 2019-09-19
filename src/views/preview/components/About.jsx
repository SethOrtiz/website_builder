import React from "react";
import { withRouter } from "react-router-dom";
import Info from "./Info";

const About = props => {
  return (
      <section id="about-grid" className="about">
        <div className="left-column"></div>
        <Info
          background="rgba(0,0,0,0.3)"
          fontColor="#fffef9"
          title="Our Story"
          content="Lorem ipsum dolor sit amet distinctio placeat nihil praesentium ullam architecto minima incidunt cumque natus sapiente"
        />
      </section>
  );
};
export default withRouter(About);
