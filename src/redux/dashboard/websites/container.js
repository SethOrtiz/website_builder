import { connect } from "react-redux";
import { getWebsites } from "./thunks";
import MyWebsites from "../../../views/dashboard/components/MyWebites";

const mapStateToProps = function({ websites }) {
  return {
    ...websites
  }; 
};

const mapDispatchToProps = function(dispatch) {
  return {
    getWebsites: function() {
      dispatch(getWebsites());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWebsites);

