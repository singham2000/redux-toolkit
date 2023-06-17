const redux = require("redux");
// const createStore = redux.configureStore;
const createStore = redux.createStore;
//Actions
const WINGS_ORDERED = "WINGS_ORDERED";

//Action defination

//Action Creator, function that returns action
function orderwings() {
  return {
    type: WINGS_ORDERED,
    quantity: 1,
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
        numberofwings: state.numberofwings - 1,
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
store.dispatch(orderwings())

