import { connect } from "react-redux";
import {
  handleSignUp,
  handleSignIn,
  handleForgotPassword,
  handleHome
} from "./actions";
import Hero from "../../../views/landing/components/Hero";

const mapStateToProps = function({ auth, nav }) {
  return {
    token: auth.token,
    ...nav
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
)(Hero);
