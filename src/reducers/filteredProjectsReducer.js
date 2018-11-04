import {REQUEST_PROJECTS_FILTER, RECEIVE_PROJECTS_FILTER} from '../actions/projectsFilterActions'

export default (state = {filter:false, filteredProjects:null}, {type, filteredProjects}) => {
 switch (type) {
  case RECEIVE_PROJECTS_FILTER:
    return {filter:true, filteredProjects};
  default:
   return state
 }
}
