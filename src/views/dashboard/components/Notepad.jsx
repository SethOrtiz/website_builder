import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
///////////////////////////////////////////       STYLING
const styles = {
  notepad: {
    height: "67vh",
    boxSizing: "border-box",
    border: "2px solid #000",
    borderTop: "none",
    backgroundColor: "#fffef9",
    display: "grid",
    gridTemplateRows: "1fr 10fr 1fr",
    color: "#000"
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    padding: "5%"
  },
  titleContainer: {
    borderBottom: "2px solid #000"
  },
  title: {
    fontSize: "2em",
    color: "#000",
    textAlign: "center",
    padding: "0.2em"
  },
  note: {
    fontFamily: "Handlee",
    fontSize: "1.2em",
    listStyle: "disc",
    margin: "0.5em 0",
    padding: "0.2em",
    borderRadius: "0.5em"
  },
  form: {
    borderTop: "2px solid #000",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-center",
    justifyContent: "space-around",
    padding: "0px 0.5em"
  },
  input: {},
  update: {
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: "11fr 1fr"
  },
  add: {
    fontSize: "3.5em",
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    fontWeight: "700"
  },
  delete: {
    fontSize: "2em",
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    fontWeight: "700",
    color: "#000"
  },
  feedback: {
    width: "5%",
    height: "100%",
    backgroundColor: "darkred"
  }
};

const Notepad = props => {
  ///////////////////////////////////////////     STATE DECLARATION
  const [newNote, setNewNote] = useState({
    value: ""
  });
  const [empty, setEmpty] = useState({
    value: false
  });

  ///////////////////////////////////////////     RESET WHEN COMPONENT MOUNTS
  const { getAllNotes } = props;
  const { user_id } = props;
  useEffect(() => {
    getAllNotes(user_id);
    setEmpty({ value: false });
  }, [getAllNotes, user_id]);

  ///////////////////////////////////////////     UPDATE VALUE ON CHANGE
  const handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    setNewNote({ value });
    setEmpty({
      value: false
    });
  };

  ///////////////////////////////////////////     RESETS AFTER SUCCESSFUL SUBMITION
  const resetState = () => {
    setNewNote({
      value: ""
    });
  };

  ///////////////////////////////////////////       CREATES A NEW NOTE
  const handleSubmit = e => {
    e.preventDefault();
    if (newNote.value) {
      props.addNote(`${user_id}`, newNote.value);
      resetState();
    } else {
      setEmpty({
        value: true
      });
    }
  };
  // onBlur={handleUpdate}

  ///////////////////////////////////////////       JSX
  return (
    <section id="Notepad" style={styles.notepad}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Journal</h1>
      </div>
      <div style={styles.main}>
        <ul>
          {props.notes.map(obj => {
            return (
              <div key={obj.id.toString()} style={styles.update}>
                <li style={styles.note}>{obj.content}</li>
                <button className="opacity" style={styles.delete}>
                  -
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="new-note"
          onChange={handleChange}
          placeholder="what to do..."
          value={newNote.value}
          className="control-two"
          noValidate
          autoComplete="off"
          style={styles.input}
        />
        {empty.value && <div style={styles.feedback}> </div>}
        <button onClick={handleSubmit} style={styles.add}>
          +
        </button>
      </form>
    </section>
  );
};

export default withRouter(Notepad);
