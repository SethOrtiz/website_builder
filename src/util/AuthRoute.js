import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {LANDING} from "../constants/routes";
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated !== true ? <Redirect to={LANDING} /> : <Component {...props} />
    }
  />
);
const mapStateToProps = function({auth}) {
  return {
    authenticated: auth.authenticated
  };
};
export default connect(mapStateToProps)(AuthRoute);