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
        {/* linkOne ,linkTwo, and linkThree are arrays in the props objects [href, content, color] */}
        <div className="link-container">
          {props.linkOne && (
            <a style={{ color: props.linkOne[2] }} href={props.linkOne[1]}>
              {props.linkOne[0]}
            </a>
          )}
          {props.linkTwo && (
            <a style={{ color: props.linkTwo[2] }} href={props.linkTwo[1]}>
              {props.linkTwo[0]}
            </a>
          )}
          {props.linkThree && (
            <a href={props.linkThree[1]}>{props.linkThree[0]}</a>
          )}
        </div>
      </section>
      <div
        className="right-column"
        style={{
          backgroundImage: `url(${props.bgImage})`
        }}
      >
        <form action="">
          <input className="get-started" placeHolder="Listen"></input>
        </form>
      </div>
    </section>
  );
};
export default withRouter(Hero);
