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