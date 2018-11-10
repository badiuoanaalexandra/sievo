import {RECEIVE_PROJECTS_FILTER} from '../actions/projectsFilterActions'
import {RECEIVE_PROJECTS_SORT} from '../actions/projectsSortActions'
import {RECEIVE_PROJECTS_RESET} from '../actions/projectsResetActions'

export default (state = {changed:false, description:"", sortingOrder:"", changedProjects:null}, {type, description, sortingOrder, sortField, changedProjects}) => {
 switch (type) {
  case RECEIVE_PROJECTS_FILTER:
  case RECEIVE_PROJECTS_SORT:
    return {changed:true, description, sortingOrder, sortField, changedProjects};
  case RECEIVE_PROJECTS_RESET:
      return {changed:false, description:"", sortingOrder:"", changedProjects:null};
  default:
   return state
 }
}
