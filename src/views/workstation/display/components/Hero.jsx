import React from "react";
import { withRouter } from "react-router-dom";

const Hero = props => {
  return (
    <section id="hero-grid" className="hero">
      <section id="Info" className="info">
        <form action="">
          <textArea
            name="text"
            rows="2"
            cols="11"
            wrap="soft"
            className="title-input"
            type="text"
            placeHolder="New Album Out Now"
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
      <div
        className="right-column"
        style={{
          backgroundImage: `url(https://bit.ly/2rRX3sV)`
        }}
      >
        <form action="">
          <textArea
            name="text"
            rows="1"
            cols="10"
            wrap="soft"
            className="get-started-input"
            type="text"
            placeHolder="Listen"
          />
        </form>
      </div>
    </section>
  );
};
export default withRouter(Hero);
