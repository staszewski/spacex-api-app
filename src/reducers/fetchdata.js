import { FETCH_DATA, UPDATE_INPUT } from "../constants/ActionTypes";

const initialState = { 
  flights: [],
  value: "coś" 
}


export default (state = initialState, action) => {
  console.log("reducer hit")
    switch (action.type) {
    case FETCH_DATA: 
      return Object.assign({}, state, {flights: action.payload});
    case UPDATE_INPUT: 
      return Object.assign({}, state, {value: action.payload})
    default:
      return state;
    }
  };