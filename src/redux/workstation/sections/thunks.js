import axios from "axios";
import { API } from "../../../constants/api";
import {
  loadingWebsite,
  fetchWebsite,
  websiteFetchError,
  postingSection,
  sectionFailedToPost,
  sectionPostSuccess
} from "./actions";

export const getWebsite = websiteId => dispatch => {
  dispatch(loadingWebsite());
  axios
    .get(`${API}/website/${websiteId}`)
    .then(res => {
      dispatch(fetchWebsite(res.data));
      // res.data should be an array of sections.
    })
    .catch(err => {
      dispatch(websiteFetchError(err.res.data));
    });
};

export const getSection = sectionId => dispatch => {
  dispatch(loadingWebsite());
  axios
    .get(`${API}/website/${sectionId}`)
    .then(res => {
      dispatch(fetchWebsite(res.data));
      // res.data should be an array of units.
    })
    .catch(err => {
      dispatch(websiteFetchError(err.res.data));
    });
};


export const addSection = (websiteId, sectionData) => dispatch => {
  dispatch(postingSection());
  axios
    .post(`${API}/website/${websiteId}/section`, sectionData)
    .then(res => {
      dispatch(sectionPostSuccess(res.data));
    })
    .catch(err => {
      dispatch(sectionFailedToPost(err.res.data));
    });
};

export const addUnit = (sectionId, unitData) => dispatch => {
  dispatch(postingSection());
  axios
    .post(`${API}/section/${sectionId}/unit`, unitData)
    .then(res => {
      dispatch(sectionPostSuccess(res.data));
    })
    .catch(err => {
      dispatch(sectionFailedToPost(err.res.data));
    });
};