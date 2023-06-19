const defaultState = {
    isModalActive:false
}

export const isModalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_MODAL":
            return {...state, isModalActive: action.payload}
        default:
            return state
    }
}