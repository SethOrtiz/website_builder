import {
  LOADING_SITES,
  SITES_FETCH_ERROR,
  RECEIVED_SITES
} from "./actions";

const initialState = {
  sites: [],
  loading: false,
  error: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_SITES:
      return {
        ...state,
        loading: true,
        error: false
      };
    case SITES_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_SITES:
      return {
        ...state,
        loading: false,
        error: false,
        sites: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
