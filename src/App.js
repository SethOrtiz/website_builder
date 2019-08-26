import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './views/theme/Navbar'
import Landing from './views/landing/Landing'
import Dashboard from './views/dashboard/Dashboard'
import Workstation from './views/workstation/Workstation'

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard/:userId" component={Dashboard} />
          <Route path="/workstation/:userId/:websiteId" component={Workstation} />
          <Route path="*" render={() => <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

