import { connect } from "react-redux";
import { getTools } from "./thunks";
import Toolbox from "../../../views/workstation/toolbox/Toolbox";

const mapStateToProps = function({ tools }) {
  return {
    ...tools
  }; 
};

const mapDispatchToProps = function(dispatch) {
  return {
    getTools: function() {
      dispatch(getTools());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbox);