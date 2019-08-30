import {
  LOADING_WEBSITES,
  WEBSITES_FETCH_ERROR,
  RECEIVED_WEBSITES
} from "./actions";

const initialState = {
  websites: [],
  loading: false,
  error: false
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
        websites: action.payload
      };
    default:
      return state;
  }
}

export default websitesReducer;
