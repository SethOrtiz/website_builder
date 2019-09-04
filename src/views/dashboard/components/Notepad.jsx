import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const styles = {
  notepad: {
    borderTop: "1px solid black",
    backgroundColor: "#fffef9",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateRows: "7fr 1fr"
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
    borderTop: "1px solid black",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-center",
    justifyContent: "space-evenly"
  },
  add: {
    fontSize: "3em",
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    color: "#000",
    fontWeight: "700",
    alignSelf: "flex-end"
  },
  input: {
    borderBottom: "none",
    height: "100%"
  },
  feedback: {
    width: "5%",
    height: "100%",
    backgroundColor: "darkred"
  }
};

const Notepad = props => {
  ///////////////////////////////////////////     STATE DECLARATION
  const [note, setNote] = useState({
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
    setNote({ value });
    setEmpty({
      value: false
    });
  };

  ///////////////////////////////////////////     RESETS AFTER SUCCESSFUL SUBMITION
  const resetState = () => {
    setNote({
      value: ""
    });
  };
  ///////////////////////////////////////////       CREATES A NEW NOTE
  const handleSubmit = e => {
    e.preventDefault();
    if (note.value) {
      props.addNote(note.value);
      resetState();
    } else {
      setEmpty({
        value: true
      });
    }
  };

  return (
    <section id="Notepad" style={styles.notepad}>
      <div style={styles.main}>
        <h1 style={styles.title}>Notes</h1>
        <ul>
          <li style={styles.note}>
            Lorem ratpudiandae, deserunt assumenda est. Quidem, cupiditate
            laborum.
          </li>
          <li style={styles.note}>
            Lorem ratpudiandae, deserunt assumenda est. Quidem, cupiditate
            laborum.
          </li>
          <li style={styles.note}>
            Lorem ratpudiandae, deserunt assumenda est. Quidem, cupiditate
            laborum.
          </li>
        </ul>
      </div>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <div>
            <input
              type="text"
              name="new-note"
              style={styles.input}
              onChange={handleChange}
              placeholder="add a note here."
              value={note.value}
              className="control"
              noValidate
              autoComplete="off"
            />
        </div>
        {empty.value && <div style={styles.feedback}> </div>}
        <button onClick style={styles.add}>
          +
        </button>
      </form>
    </section>
  );
};

export default withRouter(Notepad);
