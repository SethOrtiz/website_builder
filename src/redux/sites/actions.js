/////////////////// Fetch My Sites  //////////////////////

export const LOADING_SITES = "LOADING_SITES";
export function loadingSites() {
  return {
    type: LOADING_SITES
  };
}

export const SITES_FETCH_ERROR = "SITES_FETCH_ERROR";
export function SitesFetchError() {
  return {
    type: SITES_FETCH_ERROR
  };
}

export const RECEIVED_SITES = "RECEIVED_SITES";
export function fetchSites(sites) {
    return {
    type: RECEIVED_SITES,
    payload: sites
  };
}