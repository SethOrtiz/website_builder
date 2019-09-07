import {
  loadingNotes,
  fetchNotes,
  notesFetchError,
  loadingNote,
  fetchNote,
  noteFetchError,
  postingNote,
  noteFailedToPost,
  notePostSuccess,
  updatingNote,
  noteFailedToUpdate,
  noteUpdateSuccess
} from "./actions";

const BASE_URL = "http://localhost:8080/api/v1/"

export function getAllNotes(userId) {
  return async function(dispatch) {
    dispatch(loadingNotes());
    try {
      const res = await fetch(`${BASE_URL}/users/${userId}`);
      if (!res.ok) {
        throw new Error();
      }
      const notesJson = await res.json();
      dispatch(fetchNotes(notesJson));
    } catch (e) {
      dispatch(notesFetchError());
    }
  };
}

export function getNote(noteId) {
  return async function(dispatch) {
    dispatch(loadingNote());
    try {
      const res = await fetch(`${BASE_URL}${noteId}`);
      if (!res.ok) {
        throw new Error();
      }
      const noteJson = await res.json();
      dispatch(fetchNote(noteJson));
    } catch (e) {
      dispatch(noteFetchError());
    }
  };
}

export function addNote(user_id, content) {
  return async function(dispatch) {
    dispatch(postingNote());
    try {
      const res = await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        body: JSON.stringify({
            user_id,
            content
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        const noteJson = await res.json();
        dispatch(notePostSuccess(noteJson), getAllNotes(noteJson.user_id));
      }
    } catch (e) {
      dispatch(noteFailedToPost());
      console.log(e);
    }
  };
}

export function updateNote(content, noteId) {
  return async function(dispatch) {
    dispatch(updatingNote());
    try {
      const res = await fetch(`${BASE_URL}/${noteId}`, {
        method: "PATCH",
        body: JSON.stringify({
            content
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        alert("Note Updated");
        const noteJson = await res.json();
        dispatch(noteUpdateSuccess(noteId, noteJson));
      }
    } catch (e) {
      dispatch(noteFailedToUpdate());
      console.log(e);
    }
  };
}