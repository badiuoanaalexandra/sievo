import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

import {REQUEST_PROJECTS_DATA, receiveProjectsData} from '../actions/projectsApiActions'
import { fetchProjects } from '../helpers/projectsApi'

export function* getProjectsFromApi() {
  try{
    const projects = yield call(fetchProjects);
    yield put(receiveProjectsData(projects))
  }
  catch(e){
    console.log(e);
  }
}

export default function* getProjects(){
  yield takeLatest(REQUEST_PROJECTS_DATA, getProjectsFromApi)
}
