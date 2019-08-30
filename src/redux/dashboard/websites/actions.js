/////////////////// Fetch My Sites  //////////////////////

export const LOADING_WEBSITES = "LOADING_WEBSITES";
export function loadingWebsites() {
  return {
    type: LOADING_WEBSITES
  };
}

export const WEBSITES_FETCH_ERROR = "WEBSITES_FETCH_ERROR";
export function websiteFetchError() {
  return {
    type: WEBSITES_FETCH_ERROR
  };
}

export const RECEIVED_WEBSITES = "RECEIVED_WEBSITES";
export function fetchWebsites(websites) {
    return {
    type: RECEIVED_WEBSITES,
    payload: websites
  };
}