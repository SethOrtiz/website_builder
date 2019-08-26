////////////// Tools Fetch /////////////

export const LOADING_TOOLS = "LOADING_TOOLS";
export function loadingTools() {
  return {
    type: LOADING_TOOLS
  };
}

export const TOOLS_FETCH_ERROR = "TOOLS_FETCH_ERROR";
export function toolsFetchError() {
  return {
    type: TOOLS_FETCH_ERROR
  };
}

export const RECEIVED_TOOLS = "RECEIVED_TOOLS";
export function fetchTools(tools) {
    return {
    type: RECEIVED_TOOLS,
    payload: tools
  };
}

