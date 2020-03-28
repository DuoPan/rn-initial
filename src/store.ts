import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getReducers, getRootSaga } from 'Logic/redux';

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  //   const initState = loadStateStore();
  return combineReducers({
    ...getReducers(),
  })({ ...state }, action);
};

// Add saga.
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
// Create the store.
export default createStore(
  rootReducer, // root reducer with router state
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// Run the saga.
sagaMiddleware.run(getRootSaga());
