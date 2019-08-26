import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import sectionsReducer from './sections/reducer'
import sitesReducer from './sites/reducer'
import unitsReducer  from './units/reducer'
import toolsReducer  from './tools/reducer'

// import reducers...
const rootReducer = combineReducers({
  secitons: sectionsReducer,
  sites: sitesReducer,
  uints: unitsReducer,
  tools: toolsReducer
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))