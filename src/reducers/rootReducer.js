import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import displayProjectsReducer from './displayProjectsReducer';
export default combineReducers({
 projectsReducer,
 displayProjectsReducer
});
