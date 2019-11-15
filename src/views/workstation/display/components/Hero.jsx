import React from "react";
import { withRouter } from "react-router-dom";
import Info from "../../../landing/components/Info";


const Hero = props => {
  return (
      <section id="hero-grid" className="hero">
        <Info
          background="rgba(0,0,0,0.3)"
          fontColor="#fffef9"
          title="New Album Out Now"
          content="Lorem ipsum, Incidunt vel, obcaecati ipsum, corrupti nemo, saepe odio molestias qui. Commodi sit doloribus est eaque!"
        />
        <div className="right-column">
          <button className="get-started">
            Listen
          </button>
        </div>
      </section>
  );
};
export default withRouter(Hero);
