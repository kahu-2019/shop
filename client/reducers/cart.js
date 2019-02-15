const initialState = [{
    name: '', quantity:''}]

function reducer(state = initialState, action){
switch (action.type) {
    case 'ADD_ITEM':
    return [...state, action.item]
    default:
    return state
}

}

export default reducer 