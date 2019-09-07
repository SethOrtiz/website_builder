
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import {DASHBOARD} from "../constants/routes";

// const PublicRoute = ({ component: Component, authenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       authenticated === true ? <Redirect to={DASHBOARD} /> : <Component {...props} />
//     }
//   />
// );
// const mapStateToProps = function({auth}) {
//   return {
//     authenticated: auth.authenticated
//   };
// };
// export default connect(mapStateToProps)(PublicRoute);