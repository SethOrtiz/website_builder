import { connect } from "react-redux";
import {
  handleSignUp,
  handleSignIn,
  handleForgotPassword,
  handleHome
} from "./actions";
import Navbar from "../../../views/theme/Navbar";

const mapStateToProps = function({ auth, nav }) {
  return {
    nav,
    auth
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
