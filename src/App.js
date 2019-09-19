//////////////////////////////////////////////////////    REACT
import React from "react";
import jwtDecode from "jwt-decode";
import "./styles/App.scss";
//////////////////////////////////////////////////////     ROUTES
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
//////////////////////////////////////////////////////      PAGES
import Landing from "./views/landing/Landing";
import Dashboard from "./views/dashboard/Dashboard";
import Workstation from "./views/workstation/Workstation";
import Preview from "./views/preview/Preview";
//////////////////////////////////////////////////////       AUTH
import { SET_AUTHENTICATED } from "./redux/landing/users/actions";
import { signOut, getUserData } from "./redux/landing/users/thunks";
import PublicRoute from "./util/PublicRoute";
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
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path={ROUTES.LANDING} component={Landing} />
          <AuthRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <AuthRoute exact path={ROUTES.WORKSTATION} component={Workstation} />
          <AuthRoute exact path={ROUTES.PREVIEW} component={Preview} />
          <Route path={ROUTES.NOT_FOUND} render={() => <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
