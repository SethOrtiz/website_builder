import React, { useState, useEffect } from "react";
import Website from "./Website";
import { withRouter } from "react-router-dom";

const MyWebsites = props => {
  ///////////////////////////////////////////       INITIALIZES STATE

  const [newWebsite, setNewWebsite] = useState({
    value: ""
  });
  const [empty, setEmpty] = useState({
    value: false
  });

  const [edit, setEdit] = useState({
    enabled: false
  });

  ///////////////////////////////////////////     GETS ALL WEBSITES FROM FIREBASE
  const { userLoading } = props;
  useEffect(() => {
    setEmpty({ value: false });
  }, []);

  ///////////////////////////////////////////     UPDATE VALUE ON CHANGE
  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    setNewWebsite({ value });
    setEmpty({
      value: false
    });
  };

  ///////////////////////////////////////////     RESETS AFTER SUCCESSFUL SUBMITION
  const resetState = () => {
    setNewWebsite({
      value: ""
    });
  };

  ///////////////////////////////////////////       CREATES A NEW WEBSITE
  const handleSubmit = e => {
    e.preventDefault();
    if (newWebsite.value) {
      props.addWebsite({ name: newWebsite.value });
      resetState();
    } else {
      setEmpty({
        value: true
      });
    }
  };

  const toggleEdit = e => {
    e.preventDefault();
    setEdit({ enabled: !edit.enabled });
  };
  console.log("loading", userLoading);
  ///////////////////////////////////////////       JSX
  return (
    <section id="Dashboard" className="myWebsites">
      <button onClick={toggleEdit} className="edit">
        {edit.enabled ? "BACK" : "EDIT"}
      </button>
      <div className="myWebsites">
        {userLoading ? (
          <div className="loader-container">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          props.websites.map((obj, index) => {
            return (
              <Website
                key={index}
                name={obj.name}
                websiteId={obj.websiteId}
                deleteWebsite={props.deleteWebsite}
                editEnabled={edit.enabled}
              />
            );
          })
        )}
      </div>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="new-website"
          onChange={handleChange}
          placeholder="Artist Name..."
          value={newWebsite.value}
          className="control-two input"
          noValidate
          autoComplete="off"
        />
        {empty.value && <div className="feedback"> </div>}
        <button type="submit" className="create">
          Create
        </button>
      </form>
    </section>
  );
};

export default withRouter(MyWebsites);
