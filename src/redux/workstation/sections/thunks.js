import {
  loadingSections,
  sectionsFetchError,
  fetchSections,
  postingSection,
  sectionFailedToPost,
  sectionPostSuccess,
} from "../actions/sectionActions";

export function getSections(websiteId) {
  return async function(dispatch) {
    dispatch(loadingSections());
    try {
      const res = await fetch(`https://us-central1-hubstereo-5f9be.cloudfunctions.net/api/websites/${websiteId}`);
      if (!res.ok) {
        throw new Error();
      }
      const sectionsJson = await res.json();
      dispatch(fetchSections(sectionsJson));
    } catch (e) {
      dispatch(sectionsFetchError());
    }
  };
}

export function addSection(websiteId) {
  return async function(dispatch) {
    dispatch(postingSection());
    try {
      const res = await fetch(`https://us-central1-hubstereo-5f9be.cloudfunctions.net/api/websites/${websiteId}/section`, {
        method: "POST",
        body: JSON.stringify({
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        alert("Section Added")
        const newSectionJson = await res.json();
        dispatch(sectionPostSuccess(newSectionJson));
      }
    } catch (e) {
      dispatch(sectionFailedToPost());
      console.log(e);
    }
  };
}