import {ADD_TO_CART} from '../actions'
const initialState = []

function reducer(state = initialState, action){
  switch (action.type) {
    case ADD_TO_CART:
      let existingItem = state.find(item => item.id == action.item.id)
      if (existingItem) {
        existingItem.quantity++
        return [...state]
      } else {
        return [...state, {...action.item, quantity: 1}]
      }
    default:
      return state
  }
}

export default reducer
