import {REQUEST_PROJECTS_DATA, RECEIVE_PROJECTS_DATA} from '../actions/projectsApiActions'

export default (state = null, {type, projects}) => {
 switch (type) {
  case RECEIVE_PROJECTS_DATA:
    console.log(projects);
    return projects;
  default:
   console.log(state);
   return state
 }
}
