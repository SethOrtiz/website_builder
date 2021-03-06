///////////////////////////////////////////       LOADING
export const LOADING_WEBSITES = "LOADING_WEBSITES";
export function loadingWebsites() {
  return {
    type: LOADING_WEBSITES
  };
}

///////////////////////////////////////////      FETCH WEBSITE
export const WEBSITE_FETCH_ERROR = "WEBSITE_FETCH_ERROR";
export function websiteFetchError() {
  return {
    type: WEBSITE_FETCH_ERROR
  };
}

export const RECEIVED_WEBSITE = "RECEIVED_WEBSITE";
export function fetchWebsite(website) {
  return {
    type: RECEIVED_WEBSITE,
    website
  };
}

///////////////////////////////////////////       ADD WEBSITE
export const WEBSITE_FAILED_TO_POST = "POST_FAILED_TO_WEBSITE";
export function websiteFailedToPost() {
  return {
    type: WEBSITE_FAILED_TO_POST
  };
}

export const WEBSITE_POST_SUCCESS = "WEBSITE_POST_SUCCESS";
export function websitePostSuccess(website) {
  return {
    type: WEBSITE_POST_SUCCESS,
    website
  };
}

///////////////////////////////////////////       DELETE WEBSITE
export const WEBSITE_DELETED = "WEBSITE_DELETED";
export function websiteDeleted(websiteId) {
  return {
    type: WEBSITE_DELETED,
    websiteId
  };
}
