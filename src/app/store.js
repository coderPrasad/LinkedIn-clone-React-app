import { configureStore } from "@redux.js/toolkit";
import userReducer from '../features/userSlice';
import { configureStore, applyMiddleware } from 'redux';
import { composeEnhancers } from 'redux-devtools-extension';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = configureStore(reducer, enhancer);

export default configureStore ({
    reducer: {
        user: userReducer,
    }
});

