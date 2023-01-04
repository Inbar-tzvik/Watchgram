
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { storyReducer } from './reducers/storyReducer'
// import { userReducer } from './reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    storyModule: storyReducer})


    export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    window.gStore = store