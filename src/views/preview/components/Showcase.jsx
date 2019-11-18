import React from "react";
import { withRouter } from "react-router-dom";

const Showcase = props => {
  return (
    <section className="showcase">
      <div className="wrapper">
        <div
          className="item"
          style={{
            backgroundImage: `url(${props.imageOne})`
          }}
        >
          <p>{props.captionOne}</p>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${props.imageTwo})`
          }}
        >
          <p>{props.captionTwo}</p>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${props.imageThree})`
          }}
        >
          <p>{props.captionThree}</p>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${props.imageFour})`
          }}
        >
          <p>{props.captionFour}</p>
        </div>
      </div>
    </section>
  );
};
export default withRouter(Showcase);
