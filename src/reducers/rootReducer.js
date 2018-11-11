import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import displayProjectsReducer from './displayProjectsReducer';
import uiReducer from './uiReducer';
export default combineReducers({
 projectsReducer,
 displayProjectsReducer,
 uiReducer
});
