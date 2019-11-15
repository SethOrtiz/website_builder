import React from "react";
import { withRouter } from "react-router-dom";

const Showcase = props => {
  return (
    <section className="showcase">
      <div className="wrapper">
        <div className="item">
          <p>Caption</p>
        </div>
        <div className="item">
          <p>Caption</p>
        </div>
        <div className="item">
          <p>Caption</p>
        </div>
        <div className="item">
          <p>Caption</p>
        </div>
      </div>
    </section>
  );
};
export default withRouter(Showcase);
