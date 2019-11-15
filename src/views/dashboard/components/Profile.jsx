import React from "react";
import { withRouter } from "react-router-dom";

const Profile = props => {
  return (
    <section id="P" className="profile">
      {props.userLoading ? (
        <>
          <div className="lds-circle">
            <div></div>
          </div>
          <div className="info">
            <p className="placeholder" >Loading...</p>
            <h1 className="placeholder" >UserName</h1>
          </div>
        </>
      ) : (
        <>
          <img src={props.imageUrl} alt="" />
          <div className="info">
            <p>Welcome</p>
            <h1>{props.handle}</h1>
          </div>
        </>
      )}
    </section>
  );
};
export default withRouter(Profile);
