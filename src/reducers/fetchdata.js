import {
  FETCH_DATA,
  UPDATE_INPUT,
  SHOW_MODAL,
  CLOSE_MODAL
} from "../constants/ActionTypes";

const initialState = {
  flights: [],
  value: "",
  showModal: false,
  indexModal: 0
}


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        flights: action.payload
      });
    case UPDATE_INPUT:
      return Object.assign({}, state, {
        value: action.payload
      });
    case SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: true,
        indexModal: action.payload
      })
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        showModal: false
      })
    default:
      return state;
  }
};