import React from "react";
import { withRouter } from "react-router-dom";

const styles = {
  profile: {
    height: "100%",
    backgroundColor: "#fffef9",
    display: "flex",
    alignItems: "center",
    color: "#000",
    borderTop: "1px solid #333"
  },
  img: {
    borderRadius: "50%",
    height: "9em",
    width: "9em",
    marginLeft: "3em",
    backgroundColor: "#333",
    objectFit: "cover"
  },
  handle: {
      margin: "auto",
      fontSize: "1.5em"
  }
};



const Profile = props => {


  return (
    <section id="P" style={styles.profile}>
      <img src={props.profileImg} style={styles.img} alt="" />
      <div style={styles.handle}>
        <h1>{props.handle} USER NAME</h1>
      </div>
    </section>
  );
};
export default withRouter(Profile);
