/////////////////// Fetch Websites //////////////////////

export const LOADING_WEBSITES = "LOADING_WEBSITES";
export function loadingWebsites() {
  return {
    type: LOADING_WEBSITES
  };
}

export const WEBSITES_FETCH_ERROR = "WEBSITES_FETCH_ERROR";
export function websitesFetchError() {
  return {
    type: WEBSITES_FETCH_ERROR
  };
}

export const RECEIVED_WEBSITES = "RECEIVED_WEBSITES";
export function fetchWebsites(websites) {
    return {
    type: RECEIVED_WEBSITES,
    websites
  };
}

/////////////////// Fetch Webiste  //////////////////////

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

export const RECEIVED_WEBSITE = "RECEIVED_WEBSITE";
export function fetchWebsite(website) {
    return {
    type: RECEIVED_WEBSITE,
    website
  };
}

///////////////////// Add Website ////////////////////////

export const POSTING_WEBSITE = "POSTING_WEBSITE";
export function postingWebsite(website) {
    return {
    type: POSTING_WEBSITE,
    website
  };
}

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