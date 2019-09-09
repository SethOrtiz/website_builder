import React, { useState, useEffect } from "react";
import Website from "./Website";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
///////////////////////////////////////////     STYLING
const styles = {
  myWebsites: {
    height: "82vh",
    display: "grid",
    boxSizing: "border-box",
    backgroundColor: " #ffefd7",
    gridTemplateRows: "auto",
    borderBottom: "2px solid #000",
    borderRight: "2px solid #000"
  },
  box: {
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
    alignItems: "flex-end",
    boxSizing: "border-box",
    backgroundColor: "#ffefd7",
    borderTop: "2px solid #000",
    borderBottom: "2px solid #000"
  },
  create: {
    height: "100%",
    fontSize: "3em",
    fontStyle: "italic",
    backgroundColor: "inherit",
    border: "none",
    borderLeft: "2px solid #000",
    outline: "none",
    color: "#000",
    fontWeight: "600",
    alignSelf: "flex-start"
  },
  input: {
    fontSize: "3em",
    paddingLeft: "0.5em",
    borderBottom: "none"
  },
  feedback: {
    width: "100%",
    height: "3em",
    backgroundColor: "darkred"
  }
};

const MyWebsites = props => {
  ///////////////////////////////////////////       INITIALIZES STATE
  const [loader, setLoader] = useState({
    open: true
  });

  const [newWebsite, setNewWebsite] = useState({
    value: ""
  });
  const [empty, setEmpty] = useState({
    value: false
  });

  ///////////////////////////////////////////     GETS ALL WEBSITES FROM FIREBASE
  const { loading } = props;
  useEffect(() => {
    setEmpty({ value: false });
    const timer = setTimeout(() => {
      setLoader({ open: false });
    }, 2500);
    return () => clearTimeout(timer);
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
      props.addWebsite(newWebsite.value);
      resetState();
    } else {
      setEmpty({
        value: true
      });
    }
  };

  ///////////////////////////////////////////       JSX
  return (
    <section id="Dashboard">
      <form style={styles.box} onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="new-website"
            style={styles.input}
            onChange={handleChange}
            placeholder="Artist Name..."
            value={newWebsite.value}
            className="control"
            noValidate
            autoComplete="off"
          />
          {empty.value && <div style={styles.feedback}> </div>}
        </div>
        <button className="opacity" type="submit" style={styles.create}>
          Create
        </button>
      </form>
      <div style={styles.myWebsites}>
        {loading || loader.open ? (
          <div className="loaderContainer">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          props.websites.map((obj, index) => {
            return <Website key={index} name={obj.name} />;
          })
        )}
      </div>
    </section>
  );
};

export default withRouter(MyWebsites);
