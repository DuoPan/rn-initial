import { put, takeLeading } from "redux-saga/effects";
import { dataStatus, transformActionError } from "../transform";
import { declareObject, TBool, TObject } from "Logic/primitive_type";

// Create a state.
function createStateProps(name, initState) {
  const _sagas = [];
  const _actionReducers = {};

  // Add a saga.
  function addSaga(saga) {
    _sagas.push(saga);
  }

  // Add a action reducer.
  function reduce(type, reducer) {
    _actionReducers[type] = reducer;
  }

  // Add a action reducer for errors.
  function reduceError(type) {
    addSaga(function*() {
      yield takeLeading(type, function*(action) {
        yield put(connectionError.show(action['e']));
      });
    });
    reduce(type, function(state, action) {
      const newState = Object.assign({}, state, {
        status: dataStatus.INTERNAL_SERVER_ERROR,
      });
      return transformActionError(newState, action.e);
    });
  }

  // Add a action reducer for resetting the states.
  function reduceReset(type) {
    // Add saga.
    const typeDone = `${type}_D`;
    addSaga(function*() {
      yield takeLeading(type, function*(action) {
        yield put({ type: typeDone, init: action["init"] });
      });
    });
    // Add reducer.
    reduce(typeDone, function() {
      return Object.assign({}, initState);
    });
  }

  // Get all the sagas.
  function getSagas() {
    return _sagas;
  }

  // Get the reducer.
  function getReducer() {
    return function(state, action) {
      if (!state) {
        state = Object.assign({}, initState);
      }
      if (action.type in _actionReducers) {
        return _actionReducers[action.type](state, action, initState);
      }
      return state;
    };
  }

  // Return all the functions.
  return {
    addSaga,
    reduce,
    reduceError,
    reduceReset,
    getSagas,
    getReducer,
    name,
  };
}

export default function createState(name, initialState, buildRedux) {
  const stateProps = createStateProps(name, initialState);
  buildRedux(stateProps);
  return [name, stateProps.getSagas(), stateProps.getReducer()];
}

export const TConnectionError = declareObject({
  on: TBool.isRequired,
  error: TObject,
});

export const connectionErrorState = createState(
  "connectionError",
  {
    on: false,
    error: null,
  },
  ({ reduce }) => {
    reduce("CONNECTION_ERROR_ON", function(state, action) {
      let data = Object.assign({}, state);
      data.on = true;
      data.error = action.e;
      return data;
    });

    reduce("CONNECTION_ERROR_OFF", function(state, action) {
      let data = Object.assign({}, state);
      data.on = false;
      data.error = null;
      return data;
    });
  },
);

export const connectionError = {
  show: e => {
    return { type: "CONNECTION_ERROR_ON", e };
  },
  hide: () => ({ type: "CONNECTION_ERROR_OFF" }),
};
