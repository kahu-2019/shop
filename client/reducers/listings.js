import {SET_LISTINGS} from '../actions'
const initialState = []

export default function(state=initialState, action) {
  switch(action.type) {
    case SET_LISTINGS:
      return action.listings

    default:
      return state
  }
}
