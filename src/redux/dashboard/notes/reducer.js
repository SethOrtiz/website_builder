import {
  LOADING_NOTES,
  NOTES_FETCH_ERROR,
  RECEIVED_NOTES,
  LOADING_NOTE,
  NOTE_FETCH_ERROR,
  RECEIVED_NOTE,
  POSTING_NOTE,
  NOTE_FAILED_TO_POST,
  NOTE_POST_SUCCESS,
  UPDATING_NOTE,
  NOTE_FAILED_TO_UPDATE,
  NOTE_UPDATE_SUCCESS
} from "./actions";

const initialState = {
  notes: [],
  updating: false,
  updateFailure: false,
  loading: false,
  error: false,
  posting: false,
  postingFailure: false
};

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_NOTES:
      return {
        ...state,
        loading: true,
        error: false
      };
    case NOTES_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_NOTES:
      return {
        ...state,
        loading: false,
        error: false,
        notes: action.notes
      };
    case LOADING_NOTE:
      return {
        ...state,
        loading: true,
        error: false
      };
    case NOTE_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_NOTE:
      return {
        ...state,
        loading: false,
        error: false,
        note: action.note
      };
    case POSTING_NOTE:
      return {
        ...state,
        posting: true,
        postFailure: false
      };
    case NOTE_FAILED_TO_POST:
      return {
        ...state,
        posting: false,
        postFailure: true
      };
    case NOTE_POST_SUCCESS:
      return {
        ...state,
        posting: false,
        postFailure: false,
        notes: state.notes.concat(action.note)
      };
    case UPDATING_NOTE:
      return {
        ...state,
        updating: true,
        updateFailure: false
      };
    case NOTE_FAILED_TO_UPDATE:
      return {
        ...state,
        updating: false,
        updateFailure: true
      };
    case NOTE_UPDATE_SUCCESS:
      return {
        ...state,
        updating: false,
        updateFailure: false,
        posts: state.notes.map(note => {
          if (note.id === action.noteId) {
            note = action.noteJson;
          }
          return note;
        })
      };
    default:
      return state;
  }
}
export default notesReducer;
