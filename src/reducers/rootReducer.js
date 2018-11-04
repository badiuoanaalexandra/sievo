import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import filteredProjectsReducer from './filteredProjectsReducer';
export default combineReducers({
 projectsReducer,
 filteredProjectsReducer
});
