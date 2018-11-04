import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

import {REQUEST_PROJECTS_FILTER, receiveProjectsFilter} from '../actions/projectsFilterActions'
import { fetchFilteredProjects } from '../helpers/projectsFilter'

export function* filterProjectsbyDescription(action) {
  try{
    const description = action.description;
    const projects = action.projects;
    const filteredProjects = yield call(fetchFilteredProjects, description, projects)
    yield put(receiveProjectsFilter(filteredProjects))
  }
  catch(e){
    console.log(e);
  }
}

export default function* filterProjects(){
  yield takeLatest(REQUEST_PROJECTS_FILTER, filterProjectsbyDescription)
}
