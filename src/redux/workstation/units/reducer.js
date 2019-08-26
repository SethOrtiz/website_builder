import {
  LOADING_UNITS,
  UNITS_FETCH_ERROR,
  RECEIVED_UNITS,
  POSTING_UNIT,
  UNIT_FAILED_TO_POST,
  UNIT_POST_SUCCESS
} from "./actions";

const initialState = {
  units: [],
  loading: false,
  error: false,
  posting: false,
  postFailure: false
};

function unitsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_UNITS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case UNITS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_UNITS:
      return {
        ...state,
        loading: false,
        error: false,
        units: action.payload
      };
    case POSTING_UNIT:
      return {
        ...state,
        posting: true,
        postFailure: false
      };
    case UNIT_FAILED_TO_POST:
      return {
        ...state,
        posting: false,
        postFailure: true
      };
    case UNIT_POST_SUCCESS:
      return {
        ...state,
        posting: false,
        postFailure: false,
        units: state.units.concat(action.payload)
      };
    default:
      return state;
  }
}

export default unitsReducer;
