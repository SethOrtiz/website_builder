import { connect } from "react-redux";
import { signUp, signIn } from "./thunks";
import Hero from "../../views/landing/components/Hero";

const mapStateToProps = function({ state }) {
  return {
    auth: state.auth,
    loadingSignIn: state.signInLoading,
    error: state.signInError,
    loading: state.signUploading,
    loadingSignUp: state.signUpError
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    signIn: function(email, password) {
      dispatch(signIn(email, password));
    },
    signUp: function(handle, email, password, passwordConfirm) {
      dispatch(signUp(handle, email, password, passwordConfirm));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);
