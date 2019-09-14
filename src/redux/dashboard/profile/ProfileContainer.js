import { connect } from "react-redux";
import Profile from "../../../views/dashboard/components/Profile";

const mapStateToProps = function({ auth }) {
  return {
     authenticated: auth.authenticated,
     ...auth.credentials,
     userLoading: auth.userLoading
  }; 
};

// const mapDispatchToProps = function(dispatch) {
//   return {
//   };
// };

export default connect(
  mapStateToProps,
//   mapDispatchToProps
)(Profile);
