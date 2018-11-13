import {call, put, takeLatest} from 'redux-saga/effects'

import {REQUEST_PROJECTS_FILTER, receiveProjectsFilter} from '../actions/projectsFilterActions'
import { fetchFilteredProjects } from '../helpers/projectsFilter'
import { fetchSortedProjects } from '../helpers/projectsSort'

export function* filterProjectsbyField(action) {
  try{
    const description = action.description;
    const descriptionField = action.descriptionField;
    const projects = action.filterProjects;
    let filteredProjects = yield call(fetchFilteredProjects, description, descriptionField, projects)

    const sortingOrder = action.sortingOrder;
    const sortField = action.sortField;
    if(!sortingOrder || sortingOrder !== ""){
      filteredProjects = fetchSortedProjects(sortingOrder, sortField, filteredProjects)
    }

    yield put(receiveProjectsFilter(description, sortingOrder, sortField, filteredProjects))
  }
  catch(e){
    console.log(e);
  }
}

export default function* filterProjects(){
  yield takeLatest(REQUEST_PROJECTS_FILTER, filterProjectsbyField)
}
