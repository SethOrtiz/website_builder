import { connect } from "react-redux";
import { getSites } from "./thunks";
import MySites from "../../../views/dashboard/components/MySites";

const mapStateToProps = function({ sites }) {
  return {
    ...sites
  }; 
};

const mapDispatchToProps = function(dispatch) {
  return {
    getSites: function() {
      dispatch(getSites());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySites);

