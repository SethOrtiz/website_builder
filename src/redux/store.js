import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import navReducer from './landing/nav/reducer'
import authReducer  from './landing/users/reducer'
import websitesReducer from './dashboard/websites/reducer'
import notesReducer from './dashboard/notes/reducer'
import sectionsReducer from './workstation/sections/reducer'
import toolsReducer  from './workstation/tools/reducer'

// import reducers...
const rootReducer = combineReducers({
  sections: sectionsReducer,
  notes: notesReducer,
  websites: websitesReducer,
  tools: toolsReducer,
  auth: authReducer,
  nav: navReducer
})

const middleware = [thunk, logger]

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

export default store