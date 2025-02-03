import { SUGN_UP } from '../Actions/Users/ActionTypes/ApiActionTypes'

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUGN_UP:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default userReducer
