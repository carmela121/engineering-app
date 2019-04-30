import { combineReducers } from 'redux';
import employeesReducer from './employeesReducer';
import personasReducer from './personasReducer';


export default combineReducers({
   employees: employeesReducer,
   personas: personasReducer
});