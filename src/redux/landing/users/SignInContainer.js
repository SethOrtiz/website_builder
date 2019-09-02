import { connect } from "react-redux";
import { signIn } from "./thunks";
import SignIn from "../../../views/landing/components/SignUp";

const mapStateToProps = function({ auth }) {
  return {
    token: auth.token
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    signIn: function(email, password) {
      dispatch(signIn(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
