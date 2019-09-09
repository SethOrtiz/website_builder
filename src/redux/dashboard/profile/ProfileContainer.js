import { connect } from "react-redux";
import Profile from "../../../views/dashboard/components/Profile";

const mapStateToProps = function({ auth, websites }) {
  return {
    ...websites,
     authenticated: auth.authenticated,
     ...auth.credentials
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
