import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
const styles = {
  notepad: {
    borderTop: "1px solid black",
    backgroundColor: "#222",
    display: "grid",
    gridTemplateRows: "7fr 1fr",
    color: "#fffef9"
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",  
    flexDirection: "column",
    padding: "10%"
  },
  title: {
    fontSize: "2em",
    marginBottom: "1em"
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
    borderTop: "2px solid #fffef9",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-center",
    justifyContent: "space-around"
  },
  update: {
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: "11fr 1fr"
  },
  add: {
    fontSize: "3em",
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    color: "#fffef9",
    fontWeight: "700",
    alignSelf: "flex-end"
  },
  delete: {
    fontSize: "2em",
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    fontWeight: "700",
    color: "#fffef9"
  },
  input: {
    outline: "none",
    borderTop: "3px solid fffef9",
    height: "100%",
    color: "#fffef9"
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
  const { user_id } = props
  useEffect(() => {
    getAllNotes(user_id)
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
  return (
    <section id="Notepad" style={styles.notepad}>
      <div style={styles.main}>
        <h1 style={styles.title}>Notes</h1>
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
        <div>
          <input
            type="text"
            name="new-note"
            style={styles.input}
            onChange={handleChange}
            placeholder="what to do..."
            value={newNote.value}
            className="control"
            noValidate
            autoComplete="off"
          />
        </div>
        {empty.value && <div style={styles.feedback}> </div>}
        <button onClick={handleSubmit} style={styles.add}>
          +
        </button>
      </form>
    </section>
  );
};

export default withRouter(Notepad);
