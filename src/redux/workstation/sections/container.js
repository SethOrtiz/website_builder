import { connect } from "react-redux";
import { getSections, addSection } from "./thunks";
import Display from "../../../views/workstation/display/Display";

const mapStateToProps = function({ sections }) {
  return {
    ...sections
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getSection: function(userId, siteId) {
      dispatch(getSections(userId, siteId));
    },
    addSection: function() {
      dispatch(addSection());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
