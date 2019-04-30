import { combineReducers } from 'redux';
import employeesReducer from './employeesReducer';
import personasReducer from './personasReducer';
import skillsReducer from './skillsReducer';


export default combineReducers({
   employees: employeesReducer,
   personas: personasReducer,
   skills: skillsReducer
});