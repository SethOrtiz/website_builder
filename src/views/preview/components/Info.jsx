import React from "react";

const Info = props => {
  return (
    <section
    id="Info"
    className="info"
      style={{
        backgroundColor: props.background,
        color: props.fontColor
      }}
    >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
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
  );
};

export default Info;
