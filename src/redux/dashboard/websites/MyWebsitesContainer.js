import { connect } from "react-redux";
import { addWebsite, deleteWebsite } from "./thunks";
import MyWebsites from "../../../views/dashboard/components/MyWebsites";

const mapStateToProps = function({ auth, websites }) {
  return {
    ...websites,
    authenticated: auth.authenticated,
    credentials: auth.credentials,
    websites: auth.websites,
    userLoading: auth.userLoading
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    addWebsite: function(body) {
      dispatch(addWebsite(body));
    },
    deleteWebsite: function(websiteId) {
      dispatch(deleteWebsite(websiteId));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWebsites);
