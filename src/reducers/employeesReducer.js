export default (state = { employeeList: []}, action) => {
    if(action.type === 'FETCH_EMPLOYEES') {
        return {
            ...state,
            employeeList: action.payload
        };
    }
    if(action.type === 'FETCH_FILTERED_EMPLOYEES') {
        return {
            ...state,
            employeeList: action.payload
        };
    }
    return state;
    
};

