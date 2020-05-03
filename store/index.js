import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import * as reducers from "./modules";
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);

  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk),);
  const store = createStore(rootReducer, initialState, enhancer);
  
  return store
}
