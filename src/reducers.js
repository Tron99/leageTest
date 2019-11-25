import addUser from "./actions";
import userActionTypes from "./types";
import {combineReducers} from 'redux'

const  addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionTypes.ADD_USER:
      return {
        user: action.payload
      };
    default:
        return state
  }
};

export default combineReducers({
    addUserReducer
})