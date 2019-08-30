import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import sitesReducer from './dashboard/sites/reducer'
import sectionsReducer from './workstation/sections/reducer'
import unitsReducer  from './workstation/units/reducer'
import toolsReducer  from './workstation/tools/reducer'

// import reducers...
const rootReducer = combineReducers({
  secitons: sectionsReducer,
  sites: sitesReducer,
  uints: unitsReducer,
  tools: toolsReducer
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))