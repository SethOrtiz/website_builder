import {
  loadingSections,
  sectionsFetchError,
  fetchSections,
  postingSection,
  sectionFailedToPost,
  sectionPostSuccess,
} from "../actions/sectionActions";

export function getSections() {
  return async function(dispatch) {
    dispatch(loadingSections());
    try {
      const res = await fetch(`./sections`);
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

export function addSection(unit1, unit2, unit3, unit4) {
  return async function(dispatch) {
    dispatch(postingSection());
    try {
      const res = await fetch(`./sections`, {
        method: "POST",
        body: JSON.stringify({
          unit1,
          unit2,
          unit3,
          unit4
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