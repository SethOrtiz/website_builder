import { API } from "../../../constants/api";
import axios from "axios";
import {
  loadingWebsites,
  websiteFailedToPost,
  websitePostSuccess,
  websiteDeleted
} from "./actions";

export const addWebsite = newWebsite => dispatch => {
  dispatch(loadingWebsites());
  axios
    .post(`${API}/website`, newWebsite)
    .then(res => {
      dispatch(websitePostSuccess(res.data));
    })
    .catch(err => {
      dispatch(websiteFailedToPost(err));
    });
};

export const deleteWebsite = websiteId => dispatch => {
  dispatch(loadingWebsites());
  axios
    .delete(`${API}/website/${websiteId}`)
    .then(() => {
      dispatch(websiteDeleted(websiteId));
    })
    .catch(err => {
      console.log(err);
    });
};
