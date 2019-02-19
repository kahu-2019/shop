import {getAllListings} from '../api'

export const SET_LISTINGS="SET_LISTINGS"
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"

export function setListings(listings) {
  return {
    type: SET_LISTINGS,
    listings
  }
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item
  }
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    item
  }
}

export function fetchListings() {
  return (dispatch) => {
    return getAllListings()
        .then(newListings => {
            dispatch(setListings(newListings))
        })
  }
}
