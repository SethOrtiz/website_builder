/////////////////// Fetch All Notes  ....by user//////////////////////
export const LOADING_NOTES = "LOADING_NOTES";
export function loadingNotes() {
  return {
    type: LOADING_NOTES
  };
}

export const NOTES_FETCH_ERROR = "NOTES_FETCH_ERROR";
export function notesFetchError() {
  return {
    type: NOTES_FETCH_ERROR
  };
}

export const RECEIVED_NOTES = "RECEIVED_NOTES";
export function fetchNotes(notes) {
    return {
    type: RECEIVED_NOTES,
    notes
  };
}

/////////////////// Fetch Note  //////////////////////
export const LOADING_NOTE = "LOADING_NOTE";
export function loadingNote() {
  return {
    type: LOADING_NOTE
  };
}

export const NOTE_FETCH_ERROR = "NOTE_FETCH_ERROR";
export function noteFetchError() {
  return {
    type: NOTE_FETCH_ERROR
  };
}

export const RECEIVED_NOTE = "RECEIVED_NOTE";
export function fetchNote(note) {
    return {
    type: RECEIVED_NOTE,
    note
  };
}
///////////////////// Add Note ////////////////////////
export const POSTING_NOTE = "POSTING_NOTE";
export function postingNote() {
    return {
    type: POSTING_NOTE
  };
}

export const NOTE_FAILED_TO_POST = "POST_FAILED_TO_NOTE";
export function noteFailedToPost() {
  return {
    type: NOTE_FAILED_TO_POST
  };
}

export const NOTE_POST_SUCCESS = "NOTE_POST_SUCCESS";
export function notePostSuccess(note) {
    return {
    type: NOTE_POST_SUCCESS,
    note
  };
}

///////////////////// Update Note ////////////////////////
export const UPDATING_NOTE = "UPDATE_NOTE";
export function updatingNote() {
    return {
    type: POSTING_NOTE
  };
}

export const NOTE_FAILED_TO_UPDATE = "POST_FAILED_TO_UPDATE";
export function noteFailedToUpdate() {
  return {
    type: NOTE_FAILED_TO_UPDATE
  };
}

export const NOTE_UPDATE_SUCCESS = "NOTE_UPDATE_SUCCESS";
export function noteUpdateSuccess(noteId, noteJson) {
    return {
    type: NOTE_POST_SUCCESS,
    noteId,
    noteJson
  };
}