import { connect } from "react-redux";
import {
  handleSignUp,
  handleHome
} from "./actions";
import Hero from "../../../views/landing/components/Hero";

const mapStateToProps = function({ auth, nav }) {
  return {
    ...nav,
    ...auth
  };
};
const mapDispatchToProps = function(dispatch) {
  return {
    handleSignUp: function() {
      dispatch(handleSignUp());
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
