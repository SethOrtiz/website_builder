import { API } from "../../../constants/api";
import axios from "axios";
import {
  loadingWebsites,
  fetchWebsites,
  websitesFetchError,
  postingWebsite,
  websiteFailedToPost,
  websitePostSuccess
} from "./actions";

export const getAllWebsites = () => (dispatch) => {
  dispatch(loadingWebsites());
  axios
    .get(`${API}/websites`)
    .then((res) => {
      dispatch(fetchWebsites(res.data));
    })
    .catch((err) => {
      dispatch(websitesFetchError());
    });
};

export const addWebsite = (newWebsite) => (dispatch) => {
  dispatch(postingWebsite());
  axios
    .post(`${API}/website`, newWebsite)
    .then(res => {
      dispatch(websitePostSuccess(res.data));
    })
    .catch(err => {
      dispatch(websiteFailedToPost(err.res.data));
    });
}