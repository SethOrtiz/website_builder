import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

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
    <section id="Notepad" className="notepad">
      <div className="titleContainer">
        <h1 className="title">Journal</h1>
      </div>
      <div className="main">
        <ul>
          {props.notes.map(obj => {
            return (
              <div key={obj.id.toString()} className="update">
                <li className="note">{obj.content} </li>
                <button className="opacity delete">-</button>
              </div>
            );
          })}
        </ul>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="new-note"
          onChange={handleChange}
          placeholder="what to do..."
          value={newNote.value}
          className="control-two"
          noValidate
          autoComplete="off"
        />
        {empty.value && <div className="feedback"> </div>}
        <button onClick={handleSubmit} className="add">
          +
        </button>
      </form>
    </section>
  );
};

export default withRouter(Notepad);
