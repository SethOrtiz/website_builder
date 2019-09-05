import React, { useState, useEffect } from "react";
import Website from "./Website";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/

const styles = {
  MyWebsites: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    boxSizing: "border-box",
    borderLeft: "1px solid #000",
    borderTop: "1px solid #000",
    backgroundColor: " #ffefd7"
  },
  box: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    backgroundColor: " #d2e7ff",
    alignItems: "flex-end",
    boxSizing: "border-box",
  },
  create: {
    fontSize: "3em",
    fontStyle: "italic",
    backgroundColor: "inherit",
    border: "none",
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
    outline: "none",
    color: "#000",
    fontWeight: "600",
    alignSelf: "flex-start",
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
  const [websites, setWebsites] = useState({
    websites: []
  });
  const [newWebsite, setNewWebsite] = useState({
    value: ""
  });
  const [empty, setEmpty] = useState({
    value: false
  });
  ///////////////////////////////////////////     RESET WHEN COMPONENT MOUNTS
  useEffect(() => {
    setEmpty({ value: false });
    setWebsites({ websites: props.getAllWebsites() });
  }, [props]);
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
    if (websites.value) {
      props.addWebsite(newWebsite.value);
      resetState();
      websites.websites.push({ name: newWebsite.value });
    } else {
      setEmpty({
        value: true
      });
    }
  };
  const websiteContainer = () => {
    for (let i = 0; i < websites.length; i++) {
      const website = websites[i];
      return <Website handle={website.name} />;
    }
  };
  return (
    <section id="Dashboard" style={styles.MyWebsites}>
      <form style={styles.box} onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="new-note"
            style={styles.input}
            onChange={handleChange}
            placeholder="Name"
            value={websites.value}
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
      {websiteContainer}
      <Website handle="The Strokes" />
      <Website handle="The Clash" />
      <Website handle="AM" />
    </section>
  );
};
export default withRouter(MyWebsites);
