import { connect } from "react-redux";
import { getAllWebsites, addWebsite } from "./thunks";
import MyWebsites from "../../../views/dashboard/components/MyWebsites";

const mapStateToProps = function({ auth, websites }) {
  return {
    ...websites,
     authenticated: auth.authenticated,
     user_id: auth.user_id
  }; 
};

const mapDispatchToProps = function(dispatch) {
  return {
    getAllWebsites: function() {
      dispatch(getAllWebsites());
    },
    addWebsite: function(body){
      dispatch(addWebsite(body));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWebsites);

