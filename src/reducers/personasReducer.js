export default (state = { personaList: []}, action) => {
    if(action.type === 'FETCH_PERSONAS') {
        return {
            ...state,
            personaList: action.payload
        };
    }
    return state;
}