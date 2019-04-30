export default (state = { skillList: []}, action) => {
    if(action.type === 'FETCH_SKILLS') {
        return {
            ...state,
            skillList: action.payload
        };
    }
    return state;
}