const defaultState = {
    type: 'all'
}

export const typeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_TYPE":
            return {...state, type:action.payload}
        default:
            return state
    }
}