import { connect } from "react-redux";
import { addUnit, getUnits } from "./thunks";
import Display from "../../../views/workstation/display/Display";

const mapStateToProps = function({ units }) {
  return {
    postFailure: units.postFailure,
    posting: units.posting,
    ...units
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getSectionUnits: function(userId, sectionId) {
      dispatch(getUnits(sectionId));
    },
    addSectionUnit: function(userId, siteId,sectionId, ...units) {
      dispatch(addUnit(userId, siteId, sectionId, ...units));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);