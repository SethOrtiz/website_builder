import { connect } from "react-redux";
import {
  handleSignUp,
  handleSignIn,
  handleForgotPassword,
  handleHome
} from "./actions";
import {signOut} from "../users/thunks";
import Navbar from "../../../views/theme/Navbar";

const mapStateToProps = function({ auth }) {
  return {
    authenticated: auth.authenticated
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    handleSignUp: function() {
      dispatch(handleSignUp());
    },
    handleSignIn: function() {
      dispatch(handleSignIn());
    },
    signOut: function() {
      dispatch(signOut());
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
)(Navbar);
