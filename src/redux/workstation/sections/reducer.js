import {
  LOADING_WEBSITE,
  WEBSITE_FETCH_ERROR,
  RECEIVED_SECTIONS,
  POSTING_SECTION,
  SECTION_FAILED_TO_POST,
  SECTION_POST_SUCCESS
} from "./actions";
const initialState = {
  sections: [],
  loading: false,
  error: false,
  posting: false,
  postFailure: false
};

function sectionsReducer(state = initialState, action) {
  switch (action.type) {
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
    case RECEIVED_SECTIONS:
      return {
        ...state,
        loading: false,
        error: false,
        sections: action.payload
      };
    case POSTING_SECTION:
      return {
        ...state,
        posting: true,
        postFailure: false
      };
    case SECTION_FAILED_TO_POST:
      return {
        ...state,
        posting: false,
        postFailure: true
      };
    case SECTION_POST_SUCCESS:
      return {
        ...state,
        posting: false,
        postFailure: false,
        sections: state.sections.concat(action.payload)
      };
    default:
      return state;
  }
}
export default sectionsReducer;

