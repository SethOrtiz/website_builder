////////////// Sections Fetch /////////////

export const LOADING_WEBSITE = "LOADING_WEBSITE";
export function loadingWebsite() {
  return {
    type: LOADING_WEBSITE
  };
}

export const WEBSITE_FETCH_ERROR = "WEBSITE_FETCH_ERROR";
export function websiteFetchError() {
  return {
    type: WEBSITE_FETCH_ERROR
  };
}

export const RECEIVED_SECTIONS = "RECEIVED_SECTIONS";
export function fetchWebsite(sections) {
  return {
    type: RECEIVED_SECTIONS,
    sections
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

///////////////////  Units Fetch  ///////////////////////

export const LOADING_UNITS = "LOADING_UNITS";
export function loadingUnits() {
  return {
    type: LOADING_UNITS
  };
}

export const UNITS_FETCH_ERROR = "UNITS_FETCH_ERROR";
export function unitsFetchError() {
  return {
    type: UNITS_FETCH_ERROR
  };
}

export const RECEIVED_UNITS = "RECEIVED_UNITS";
export function fetchUnits(units) {
  return {
    type: RECEIVED_UNITS,
    payload: units
  };
}

////////////////////   Add Unit    ///////////////////////////

export const POSTING_UNIT = "POSTING_UNIT";
export function postingUnit(sectionId) {
  return {
    type: POSTING_UNIT
  };
}

export const UNIT_FAILED_TO_POST = "UNIT_FAILED_TO_POST";
export function unitFailedToPost() {
  return {
    type: UNIT_FAILED_TO_POST
  };
}

export const UNIT_POST_SUCCESS = "UNIT_POST_SUCCES";
export function unitPostSuccess(newUnitJson) {
  return {
    type: UNIT_POST_SUCCESS,
    payload: newUnitJson
  };
}
