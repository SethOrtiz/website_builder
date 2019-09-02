import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import authReducer  from './landing/users/reducer'
import websitesReducer from './dashboard/websites/reducer'
import sectionsReducer from './workstation/sections/reducer'
import unitsReducer  from './workstation/units/reducer'
import toolsReducer  from './workstation/tools/reducer'

// import reducers...
const rootReducer = combineReducers({
  sections: sectionsReducer,
  websites: websitesReducer,
  units: unitsReducer,
  tools: toolsReducer,
  auth: authReducer
})

const middleware = [thunk, logger]

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store