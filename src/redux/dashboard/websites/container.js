import { connect } from "react-redux";
import { getAllWebsites, getWebsite, addWebsite } from "./thunks";
import MyWebsites from "../../../views/dashboard/components/MyWebites";

const mapStateToProps = function({ websites }) {
  return {
    ...websites
  }; 
};

const mapDispatchToProps = function(dispatch) {
  return {
    getAllWebsites: function() {
      dispatch(getAllWebsites());
    },
    getWebsite: function(){
      dispatch(getWebsite());
    },
    addWebsite: function(){
      dispatch(addWebsite());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWebsites);

