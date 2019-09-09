import { connect } from "react-redux";
import { addWebsite } from "./thunks";
import MyWebsites from "../../../views/dashboard/components/MyWebsites";

const mapStateToProps = function({ auth, websites }) {
  return {
    ...websites,
     authenticated: auth.authenticated,
     credentials: auth.credentials,
     websites: auth.websites
  }; 
};

const mapDispatchToProps = function(dispatch) {
  return {
    addWebsite: function(body){
      dispatch(addWebsite(body));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWebsites);

