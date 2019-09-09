import {
  LOADING_WEBSITES,
  WEBSITE_FETCH_ERROR,
  RECEIVED_WEBSITE,
  WEBSITE_FAILED_TO_POST,
  WEBSITE_POST_SUCCESS,
  WEBSITE_DELETED
} from "./actions";

const initialState = {
  sections: [],
  loading: false,
  error: false,
  posting: false,
  postingFailure: false
};

function websitesReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_WEBSITES:
      return {
        ...state,
        loading: true,
        error: false
      };
    case WEBSITE_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_WEBSITE:
      return {
        ...state,
        loading: false,
        error: false,
        sections: action.sections
      };
    case WEBSITE_FAILED_TO_POST:
      return {
        ...state,
        posting: false,
        postFailure: true
      };
    case WEBSITE_POST_SUCCESS:
      return {
        ...state,
        posting: false,
        postFailure: false,
        websites: state.websites.concat(action.website)
      };
    case WEBSITE_DELETED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default websitesReducer;
