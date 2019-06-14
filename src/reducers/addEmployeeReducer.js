export default (state=[], action) => {
    if(action.type === 'CREATE_NEW_EMPLOYEE') {
        return [
            ...state,
            Object.assign({}, action.payload)
        ]
        
    }
    return state
}