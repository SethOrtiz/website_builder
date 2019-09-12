import { connect } from "react-redux";
import { getWebsite, addSection, addUnit, getSection } from "./thunks";
import Display from "../../../views/workstation/display/Display";

const mapStateToProps = function({ sections }) {
  return {
    ...sections
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getWebsite: function(userId, websiteId) {
      dispatch(getWebsite(userId, websiteId));
    },
    addSection: function(websiteId, content) {
      dispatch(addSection(websiteId, content));
    },
    getSection: function(userId, sectionId) {
      dispatch(getSection(sectionId));
    },
    addUnit: function(userId, siteId, sectionId, ...units) {
      dispatch(addUnit(userId, siteId, sectionId, ...units));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
