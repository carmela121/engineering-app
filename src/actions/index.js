
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

  export const createEmployee = () => async dispatch => {
    await jsonPlaceholder.post('/employees',{
          body: {
              "capcoInterviewTrained": true,
              "citLink": "string",
              "consultantLevelEnum": "ASSOCIATE",
              "contractor": true,
              "email": "peter@peter.com",
              "engineer": true,
              "firstname": "Peter",
              "interviewRequests": [
                {
                  "interviewingLevel": "OWNER_LEAD",
                  "personaName": "kakak"
                }
              ],
              "interviewTrained": true,
              "location": "LONDON",
              "projectRequests": [
                {
                  "name": "string",
                  "rollOffDate": "string",
                  "startDate": "string"
                }
              ],
              "projectStatus": "HELD",
              "skillRequests": [
                {
                  "level": 0,
                  "name": "string"
                }
              ],
              "startDate": "string",
              "surname": "hawkings"
            }
      })
      .then(({ data }) => {
        dispatch ({
          type: 'CREATE_NEW_EMPLOYEE',
          payload: data
        })
      })
    };

 
  
  
    