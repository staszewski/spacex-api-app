import { FETCH_DATA } from "../constants/ActionTypes";

const initialState = { 
  users: [] 
}


export default (state = initialState, action) => {
  console.log("reducer hit")
    switch (action.type) {
    case FETCH_DATA: 
    return Object.assign({}, state, {users: action.users})
    default:
      return state;
    }
  };