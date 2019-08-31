import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './views/landing/Landing'
import Dashboard from './views/dashboard/Dashboard'
import Workstation from './views/workstation/Workstation'
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route path={ROUTES.WORKSTATION}component={Workstation} />
          <Route path={ROUTES.NOT_FOUND} render={() => <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
