import {ADD_TO_CART} from '../actions'
const initialState = []

function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, {...action.item, quantity:1}]
    default:
      return state
  }
}

export default reducer
