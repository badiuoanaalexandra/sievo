import {RECEIVE_PROJECTS_DATA} from '../actions/projectsApiActions'

export default (state = null, {type, projects}) => {
 switch (type) {
  case RECEIVE_PROJECTS_DATA:
    return projects;
  default:
   return state
 }
}
