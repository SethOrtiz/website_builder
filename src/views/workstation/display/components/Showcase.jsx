import React from "react";
import { withRouter } from "react-router-dom";

const Showcase = props => {
  return (
    <section className="showcase">
      <div className="wrapper">
        <div
          className="item-input"
          style={{
            backgroundImage: `url(https://bit.ly/2KzwCim)`
          }}
        >
          <textArea
            name="text"
            rows="1"
            cols="14"
            wrap="soft"
            className="caption-input"
            type="text"
            placeHolder="Caption"
          />
        </div>
        <div
          className="item-input"
          style={{
            backgroundImage: `url(https://bit.ly/2KzwCim)`
          }}
        >
          <textArea
            name="text"
            rows="1"
            cols="14"
            wrap="soft"
            className="caption-input"
            type="text"
            placeHolder="Caption"
          />
        </div>
        <div
          className="item-input"
          style={{
            backgroundImage: `url(https://bit.ly/2KzwCim)`
          }}
        >
          <textArea
            name="text"
            rows="1"
            cols="14"
            wrap="soft"
            className="caption-input"
            type="text"
            placeHolder="Caption"
          />
        </div>
                <div
          className="item-input"
          style={{
            backgroundImage: `url(https://bit.ly/2KzwCim)`
          }}
        >
          <textArea
            name="text"
            rows="1"
            cols="14"
            wrap="soft"
            className="caption-input"
            type="text"
            placeHolder="Caption"
          />
        </div>
      </div>
    </section>
  );
};
export default withRouter(Showcase);
