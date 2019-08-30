import {
  loadingWebsites,
  websitesFetchError,
  fetchWebsites,
  postingWebsite,
  websiteFailedToPost,
  websitePostSuccess,
} from "./actions";

export function getWebsite(websiteId) {
  return async function(dispatch) {
    dispatch(loadingWebsites());
    try {
      const res = await fetch(`https://us-central1-hubstereo-5f9be.cloudfunctions.net/api/websites/${websiteId}`);
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

export function addWebsite(websiteId) {
  return async function(dispatch) {
    dispatch(postingWebsite());
    try {
      const res = await fetch(`https://us-central1-hubstereo-5f9be.cloudfunctions.net/api/websites/${websiteId}/Website`, {
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