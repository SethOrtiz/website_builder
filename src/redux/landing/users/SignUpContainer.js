import { connect } from "react-redux";
import { signUp } from "./thunks";
import SignUp from "../../../views/landing/components/SignUp";
import {
  handleSignUp,
  handleSignIn,
  handleForgotPassword,
  handleHome
} from "../nav/actions";

const mapStateToProps = function({ auth, nav }) {
  return {
    token: auth.token,
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    signUp: function(handle, email, password, passwordConfirm) {
      dispatch(signUp(handle, email, password, passwordConfirm));
    },
    handleSignUp: function() {
      dispatch(handleSignUp());
    },
    handleSignIn: function() {
      dispatch(handleSignIn());
    },
    handleForgotPassword: function() {
      dispatch(handleForgotPassword());
    },
    handleHome: function() {
      dispatch(handleHome());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
