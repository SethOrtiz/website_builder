////////////// Sections Fetch /////////////

export const LOADING_SECTIONS = "LOADING_SECTIONS";
export function loadingSections() {
  return {
    type: LOADING_SECTIONS
  };
}

export const SECTIONS_FETCH_ERROR = "SECTIONS_FETCH_ERROR";
export function sectionsFetchError() {
  return {
    type: SECTIONS_FETCH_ERROR
  };
}

export const RECEIVED_SECTIONS = "RECEIVED_SECTIONS";
export function fetchSections(sections) {
    return {
    type: RECEIVED_SECTIONS,
    payload: sections
  };
}


///////////////////// Add Section ////////////////////////

export const POSTING_SECTION = "POSTING_SECTION";
export function postingSection() {
    return {
    type: POSTING_SECTION
  };
}

export const SECTION_FAILED_TO_POST = "POST_FAILED_TO_SECTION";
export function sectionFailedToPost() {
  return {
    type: SECTION_FAILED_TO_POST
  };
}

export const SECTION_POST_SUCCESS = "SECTION_POST_SUCCESS";
export function sectionPostSuccess(newSectionJson) {
    return {
    type: SECTION_POST_SUCCESS,
    payload: newSectionJson
  };
}