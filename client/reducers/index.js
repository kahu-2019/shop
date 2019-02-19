import {combineReducers} from 'redux'
import cart from './cart'
import listings from './listings'

export default combineReducers ({
  cart,
  listings
})
