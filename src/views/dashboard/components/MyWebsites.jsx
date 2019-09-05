import React, { useState, useEffect } from "react";
import Website from "./Website";
import { withRouter } from "react-router-dom";

/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/

const styles = {
  myWebsites: {
    height: "100%",
    display: "grid",
    boxSizing: "border-box",
    borderLeft: "1px solid #000",
    borderTop: "1px solid #000",
    backgroundColor: " #ffefd7"
  },
  box: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    alignItems: "flex-end",
    boxSizing: "border-box"
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
  const [allWebsites, setAllWebsites] = useState({
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
      //
      setAllWebsites({
        websites: [
          ...allWebsites.websites,
          { id: allWebsites.websites.length + 1, name: newWebsite.value }
        ]
      });
      resetState();
    } else {
      setEmpty({
        value: true
      });
    }
  };
  return (
    <section id="Dashboard" style={styles.myWebsites}>
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
      {allWebsites.websites.map(obj => {
        return <Website key={obj.id.toString()} name={obj.name} />;
      })}
    </section>
  );
};
export default withRouter(MyWebsites);
