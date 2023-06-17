const redux = require("redux");
// const createStore = redux.configureStore;
const createStore = redux.createStore;
//Actions
const WINGS_ORDERED = "WINGS_ORDERED";
const WINGS_RESTOCKED = "WINGS_RESTOCKED";
const COKE_ORDERED = "COKE_ORDERED";
const COKE_RESTOCKED = "COKE_RESTOCKED";

//Action defination

//Action Creator, function that returns action
function orderwings(qnty = 1) {
  return {
    type: WINGS_ORDERED,
    payload: qnty,
  };
}
function restockWings(qnty = 1) {
  return {
    type: WINGS_RESTOCKED,
    payload: qnty,
  };
}
function orderCoke(qnty = 1) {
  return {
    type: COKE_ORDERED,
    payload: qnty,
  };
}
function restockCoke(qnty = 1) {
  return {
    type: COKE_RESTOCKED,
    payload: qnty,
  };
}

//Reducer, Specifies how the app's state changes in response to a action sent to the store
// A func that accepts a state and action as a argument and returns the next state to the app
/**
 * (previousState, action)=> newState
 */

const initialState = {
  numberofwings: 50,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WINGS_ORDERED:
      return {
        ...state,
        numberofwings: state.numberofwings - action.payload,
      };
    case WINGS_RESTOCKED:
      return {
        ...state,
        numberofwings: state.numberofwings + action.payload,
      };
    case COKE_ORDERED:
      return {
        ...state,
        numberofwings: state.numberofwings - action.payload,
      };
    case COKE_RESTOCKED:
      return {
        ...state,
        numberofwings: state.numberofwings + action.payload,
      };
    default:
      return state;
  }
};

/**Redux store
 *For entire app will have the one store
 * Responsibilites:
 *
 * 1- Holds the application state
 * 2- Allows access to state via a getstate()
 * 3- Allows State to be updated via dispatch(action)
 * 4- Registors listeners via subscribe(listener)
 * 5- Unsubscribe from the store : store handles unregistering
 * of listeniers via the fuction returned by the
 */

/** 1- */
const store = createStore(reducer);
/** 2- */
console.log("Initial State", store.getState());
/** 4- */
store.subscribe(() => console.log("Updates : ", store.getState()));
/** 3-
 * Invoke the action
 */
store.dispatch(orderwings(8));
store.dispatch(restockWings(5));
