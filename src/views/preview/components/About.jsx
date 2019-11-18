import React from "react";
import { withRouter } from "react-router-dom";
import Info from "./Info";

const About = props => {
  return (
      <section id="AboutUs" className="about">
        <div className="left-column"></div>
        <Info
          fontColor="#fffef9"
          title="Our Story"
          content="Lorem ipsum dolor sit amet distinctio placeat nihil praesentium ullam architecto minima incidunt cumque natus sapiente"
        />
      </section>
  );
};
export default withRouter(About);
