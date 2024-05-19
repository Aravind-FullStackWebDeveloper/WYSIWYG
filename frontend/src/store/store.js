import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Importing `thunk` as a named export
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../reducers/authReducer';
import designReducer from '../reducers/designReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  design: designReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
