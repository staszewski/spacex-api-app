import { createStore } from 'redux';
import constans from './constans';


const initialState = {
    repos: [],
    searchInputValue: '',
    showModal: false,
    indexModal: 0
}

const reducer = (state = initialState, action) => {
    console.log('reducer running', action)
    switch (action.type) {
        case constans.UPDATE_INPUT: 
            return Object.assign({}, state, {searchInputValue: action.value})
        case constans.SET_REPOS: 
            return Object.assign({}, state, {repos: action.repos})
        case constans.SHOW_MODAL:
            return Object.assign({}, state, {showModal: true, indexModal: action.index})
        case constans.CLOSE_MODAL:
            return Object.assign({}, state, {showModal: false})
        default: 
            return state;
    }
}

const store = createStore(reducer)

export default store;
