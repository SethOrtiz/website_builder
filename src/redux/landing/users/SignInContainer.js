import { connect } from "react-redux";
import { signIn } from "./thunks";
import SignIn from "../../../views/landing/components/SignIn";
import {
  handleSignUp,
  handleSignIn,
  handleForgotPassword,
  handleHome
} from "../nav/actions";
const mapStateToProps = function({auth}) {
  return {
    signInLoading: auth.signInLoading
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    signIn: function(email, password) {
      dispatch(signIn(email, password));
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
)(SignIn);
