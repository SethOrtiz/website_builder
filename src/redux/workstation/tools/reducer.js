import {
  LOADING_TOOLS,
  TOOLS_FETCH_ERROR,
  RECEIVED_TOOLS,
} from "./actions";

const initialState = {
  tools: [],
  loading: false,
  error: false
};

function toolsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_TOOLS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case TOOLS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case RECEIVED_TOOLS:
      return {
        ...state,
        loading: false,
        error: false,
        tools: action.payload
      };
    default:
      return state;
  }
}

export default toolsReducer;