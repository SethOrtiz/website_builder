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
    backgroundColor: "#fffef9",
    objectFit: "cover",
    border: "1px solid #000"
  },
  handle: {
    margin: "auto",
    fontSize: "1.5em"
  }
};


const Profile = props => {
  
  return (
    <section id="P" style={styles.profile}>
    { props.imgUrl ? <img src={props.imgUrl} style={styles.img} alt="" />
    : <div className="no-img"></div>
    }
      <div style={styles.handle}>
        <h1>{props.handle} USER NAME</h1>
      </div>
    </section>
  );
};

export default withRouter(Profile);
