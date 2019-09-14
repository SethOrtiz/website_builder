import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
///////////////////////////////////////////       STYLING
const styles = {
  profile: {
    height: "25vh",
    backgroundColor: "#fffef9",
    display: "flex",
    alignItems: "center",
    color: "#000",
    border: "2px solid #000"
  },
  img: {
    borderRadius: "50%",
    height: "9em",
    width: "9em",
    marginLeft: "3em",
    backgroundColor: "#fffef9",
    objectFit: "cover",
    border: "2px solid #000"
  },
  info: {
    marginLeft: "1rem",
    fontSize: "1.3em"
  },
  placeholder: {
    blackgroundColor: "#000",
  }
};

const Profile = props => {
  return (
    <section id="P" style={styles.profile}>
      {props.userLoading ? (
        <>
          <div className="lds-circle">
            <div></div>
          </div>
          <div style={styles.info}>
            <p style={styles.placeholder} >Loading...</p>
            <h1 style={styles.placeholder} >Place Holder Text</h1>
          </div>
        </>
      ) : (
        <>
          <img src={props.imageUrl} style={styles.img} alt="" />
          <div style={styles.info}>
            <p>Welcome</p>
            <h1>{props.handle}</h1>
          </div>
        </>
      )}
    </section>
  );
};
export default withRouter(Profile);
