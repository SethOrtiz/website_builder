import { connect } from "react-redux";
import { signUp } from "./thunks";
import SignUp from "../../../views/landing/components/SignUp";

const mapStateToProps = function({ auth }) {
  return {
   token: auth.token
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    signUp: function(handle, email, password, passwordConfirm) {
      dispatch(signUp(handle, email, password, passwordConfirm));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
