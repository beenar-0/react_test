const defaultState = {
    sort:'price',
    query:''
}

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SORT":
            return {...state, sort: action.payload}
        case "SET_QUERY":
            return {...state, query: action.payload}
        default:
            return state
    }
}