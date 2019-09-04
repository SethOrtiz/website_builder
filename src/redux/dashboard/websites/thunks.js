import { API } from "../../../constants/api";
import {
  loadingWebsites,
  fetchWebsites,
  websitesFetchError,
  loadingWebsite,
  fetchWebsite,
  websiteFetchError,
  postingWebsite,
  websiteFailedToPost,
  websitePostSuccess,
} from "./actions";

export function getAllWebsites() {
  return async function(dispatch) {
    dispatch(loadingWebsites());
    try {
      const res = await fetch(API + "/websites");
      if (!res.ok) {
        throw new Error();
      }
      const websitesJson = await res.json();
      dispatch(fetchWebsites(websitesJson));
    } catch (e) {
      dispatch(websitesFetchError());
    }
  };
}

export function getWebsite(websiteId) {
  return async function(dispatch) {
    dispatch(loadingWebsite());
    try {
      const res = await fetch(`${API}/websites/${websiteId}`);
      if (!res.ok) {
        throw new Error();
      }
      const websitesJson = await res.json();
      dispatch(fetchWebsite(websitesJson));
    } catch (e) {
      dispatch(websiteFetchError());
    }
  };
}


export function addWebsite(websiteId) {
  return async function(dispatch) {
    dispatch(postingWebsite());
    try {
      const res = await fetch(`${API}/websites/${websiteId}/website`, {
        method: "POST",
        body: JSON.stringify({
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        alert("Website Added")
        const newWebsiteJson = await res.json();
        dispatch(websitePostSuccess(newWebsiteJson));
      }
    } catch (e) {
      dispatch(websiteFailedToPost());
      console.log(e);
    }
  };
}