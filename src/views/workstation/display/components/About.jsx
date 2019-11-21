import React from "react";
import { withRouter } from "react-router-dom";

const About = props => {
  return (
      <section id="about-grid" className="about">
        <div className="left-column"></div>
      <section id="Info" className="info">
        <form action="">
          <textArea
            name="text"
            rows="1"
            cols="11"
            wrap="soft"
            className="title-input"
            type="text"
            placeHolder="About Us"
          />

          <textArea
            name="text"
            rows="5"
            cols="30"
            wrap="soft"
            className="paragraph-input"
            type="text"
            placeHolder="Lorem ipsum, Incidunt vel, obcaecati ipsum, corrupti nemo, saepe odio molestias qui. Commodi sit doloribus est eaque!"
          />
        </form>
      </section>
      </section>
  );
};
export default withRouter(About);
