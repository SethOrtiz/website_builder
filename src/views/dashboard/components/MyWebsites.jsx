import React, { useState, useEffect } from "react";
import Website from "./Website";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/

const styles = {
  myWebsites: {
    height: "82vh",
    display: "grid",
    boxSizing: "border-box",
    backgroundColor: " #ffefd7",
    gridTemplateRows: "auto"
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
  console.log(props);
  const { getAllWebsites, user_id, loading } = props;
  useEffect(() => {
    setEmpty({ value: false });
    getAllWebsites(user_id);
    const timer = setTimeout(() => {
        setLoader({open: false})
    }, 3000);
    return () => clearTimeout(timer);
  }, [getAllWebsites, user_id]);
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

  

  return (
    <section id="Dashboard">
      <form style={styles.box} onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="new-note"
            style={styles.input}
            onChange={handleChange}
            placeholder="Name"
            value={newWebsite.value}
            className="control-center"
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
            <div class="loader">
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
