
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchEmployees = () => async dispatch => {

        const response = await jsonPlaceholder.get('/employees');
        
        dispatch ({
            type: 'FETCH_EMPLOYEES',
            payload: response.data
        })
   
     }

    export const fetchPersonas = () => async dispatch => {
        const response = await jsonPlaceholder.get('/personas');  

        dispatch({
            type: 'FETCH_PERSONAS',
            payload: response.data
        })
    }

 

  
    