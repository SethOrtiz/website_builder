import {
  LOADING_WEBSITES,
  WEBSITES_FETCH_ERROR,
  RECEIVED_WEBSITES,
  LOADING_WEBSITE,
  WEBSITE_FETCH_ERROR,
  RECEIVED_WEBSITE,
  POSTING_WEBSITE,
  WEBSITE_FAILED_TO_POST,
  WEBSITE_POST_SUCCESS
} from "./actions";

const initialState = {
  websites: [],
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
    case WEBSITES_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_WEBSITES:
      return {
        ...state,
        loading: false,
        error: false,
        websites: action.websites
      };
    case LOADING_WEBSITE:
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
    case POSTING_WEBSITE:
      return {
        ...state,
        posting: true,
        postFailure: false
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
    default:
      return state;
  }
}

export default websitesReducer;
