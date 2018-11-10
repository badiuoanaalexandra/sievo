import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

import {REQUEST_PROJECTS_RESET, receiveProjectsReset} from '../actions/projectsResetActions'

export function* getProjectsReset() {
  try{
    yield put(receiveProjectsReset())
  }
  catch(e){
    console.log(e);
  }
}

export default function* resetProjects(){
  yield takeLatest(REQUEST_PROJECTS_RESET, getProjectsReset)
}
