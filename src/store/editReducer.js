const defaultState = {
    isEditActive:false
}

export const isEditReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_EDIT":
            return {...state, isEditActive: action.payload}
        default:
            return state
    }
}