import { connect } from "react-redux";
// import { retreive } from "./thunks";
import ForgotPassword from "../../../views/landing/components/ForgotPassword";
// import {
//   handleRetreive
// } from "../nav/actions";
const mapStateToProps = function({ auth, nav}) {
  return {
    ...auth,
    ...nav
  };
};
// const mapDispatchToProps = function(dispatch) {
//   return {
//     retreive: function(email) {
//       dispatch(signIn(email, password));
//     },
//   };
// };

export default connect(
  mapStateToProps,
)(ForgotPassword);
