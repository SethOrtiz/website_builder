//////////////////////////////////////////////////////    REACT
import React from "react";
import jwtDecode from "jwt-decode";
import "./App.css";
//////////////////////////////////////////////////////     ROUTES
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
//////////////////////////////////////////////////////      PAGES
import Landing from "./views/landing/Landing";
import Dashboard from "./views/dashboard/Dashboard";
import Workstation from "./views/workstation/Workstation";
//////////////////////////////////////////////////////       AUTH
import { SET_AUTHENTICATED } from "./redux/landing/users/actions";
import { signOut } from "./redux/landing/users/thunks";
import { setUser } from "./redux/landing/users/actions";
// import PublicRoute from "./util/PublicRoute";
import AuthRoute from "./util/AuthRoute";
import store from "./redux/store";
import axios from "axios";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(signOut());
    window.location.href = ROUTES.LANDING;
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    store.dispatch(setUser(decodedToken.user_id));
    axios.defaults.headers.common["Authorization"] = token;
  }
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <AuthRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <AuthRoute exact path={ROUTES.WORKSTATION} component={Workstation} />
          <Route path={ROUTES.NOT_FOUND} render={() => <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
