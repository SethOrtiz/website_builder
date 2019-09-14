import React, { useState, useEffect } from "react";
import Website from "./Website";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
///////////////////////////////////////////     STYLING
const styles = {
  container: {
    borderTop: "2px solid #000",
    height: "92vh",
  },
  myWebsites: {
    height: "83.2vh",
    display: "grid",
    backgroundColor: " #222",
    gridTemplateRows: "auto",
    borderRight: "1px solid #000"
  },
  form: {
    borderTop: "3px solid #000",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-center",
    justifyContent: "space-between"
  },
  create: {
    height: "100%",
    fontSize: "2.76em",
    fontStyle: "italic",
    backgroundColor: "#fffef9",
    border: "2px solid #000",
    borderTop: "none",
    color: "#000",
    fontWeight: "600",
    alignSelf: "flex-start",
    lineHeight: "1.5"
  },
  input: {
    fontSize: "2.76em",
    paddingLeft: "0.5em",
    color: "#000",
    backgroundColor: "#fffef9",
    borderBottom: "2px solid #000",
    width: "100%"
  },
  feedback: {
    width: "100%",
    height: "0.1em",
    backgroundColor: "darkred"
  },
  edit: {
    position: "fixed",
    fontSize: "1.5em",
    backgroundColor: "#fffef9",
    border: "2px solid #000",
    borderLeft: "none",
    outline: "none",
    fontWeight: "500",
    marginTop: "-2px"
  }
};

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
console.log('loading',userLoading)
  ///////////////////////////////////////////       JSX
  return (
    <section id="Dashboard" style={styles.container}>
      <button onClick={toggleEdit} style={styles.edit}>
        {edit.enabled ? "BACK" : "EDIT"}
      </button>
      <div style={styles.myWebsites}>
        {userLoading ? (
          <div className="loaderContainer">
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
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="new-website"
            style={styles.input}
            onChange={handleChange}
            placeholder="Artist Name..."
            value={newWebsite.value}
            className="control-two"
            noValidate
            autoComplete="off"
          />
          {empty.value && <div style={styles.feedback}> </div>}
        <button type="submit" style={styles.create}>
          Create
        </button>
      </form>
    </section>
  );
};

export default withRouter(MyWebsites);
