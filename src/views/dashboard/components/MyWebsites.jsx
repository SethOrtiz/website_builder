import React, { useState, useEffect } from "react";
import Website from "./Website";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
///////////////////////////////////////////     STYLING
const styles = {
  myWebsites: {
    height: "80vh",
    display: "grid",
    backgroundColor: " #000",
    gridTemplateRows: "auto",
    borderRight: "1px solid #000",
  },
  box: {
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
    alignItems: "flex-end",
    borderLeft: "none", 
  },
  create: {
    height: "100%",
    fontSize: "3em",
    fontStyle: "italic",
    backgroundColor: "#fffef9",
    border: "none",
    borderLeft: "2px solid #000",
    outline: "2px solid #000",
    color: "#000",
    fontWeight: "600",
    alignSelf: "flex-start"
  },
  input: {
    fontSize: "2.9em",
    paddingLeft: "0.5em",
    color: "#000",
    backgroundColor: "#fffef9",
    border: "2px solid #000",
  },
  feedback: {
    width: "100%",
    height: "3em",
    backgroundColor: "darkred"
  },
  container: {
    borderTop: "2px solid #000",
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
      props.addWebsite({ name: newWebsite.value });
      resetState();
    } else {
      setEmpty({
        value: true
      });
    }
  };

  ///////////////////////////////////////////       JSX
  return (
    <section id="Dashboard" style={styles.container}>
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
      <form style={styles.box} onSubmit={handleSubmit} noValidate>
        <div>
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
        </div>
        <button type="submit" style={styles.create}>
          Create
        </button>
      </form>
    </section>
  );
};

export default withRouter(MyWebsites);
