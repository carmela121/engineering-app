
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchFilteredEmployees = (projectStatus, skillName) => async dispatch => {


        const response = await jsonPlaceholder.get(`/employees?projectStatus=${projectStatus}`);
        
        dispatch ({
            type: 'FETCH_FILTERED_EMPLOYEES',
            payload: response.data
        })
   
     }

export const fetchAllEmployees = () => async dispatch => {
     
    
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

    export const fetchSkills = () => async dispatch => {
        const response = await jsonPlaceholder.get('/skills');  

        dispatch({
            type: 'FETCH_SKILLS',
            payload: response.data
        })
    }

 

  
    