import { connect } from "react-redux";
import { getAllNotes, getNote, addNote, updateNote } from "./thunks";
import Notepad from "../../../views/dashboard/components/Notepad";

const mapStateToProps = function({ auth, notes }) {
  return {
    ...notes,
    authenticated: auth.authenticated,
    user_id: auth.user_id
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getAllNotes: function(user_id,) {
      dispatch(getAllNotes(user_id));
    },
    getNote: function(noteId) {
      dispatch(getNote(noteId));
    },
    addNote: function(user_id, content) {
      dispatch(addNote(user_id, content));
    },
    updateNote: function(content, noteId) {
      dispatch(updateNote(content, noteId));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notepad);
