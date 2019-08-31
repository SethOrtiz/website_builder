import { api } from "../../constants/api";
import {
  postingWebsite,
  websiteFailedToPost,
  websitePostSuccess,
} from "./actions";

export function addWebsite(websiteId) {
  return async function(dispatch) {
    dispatch(postingWebsite());
    try {
      const res = await fetch(`${api}/users/${websiteId}/website`, {
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