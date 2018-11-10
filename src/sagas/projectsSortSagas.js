import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

import {REQUEST_PROJECTS_SORT, receiveProjectsSort} from '../actions/projectsSortActions'
import { fetchSortedProjects, getNewSortingOrder } from '../helpers/projectsSort'

export function* sortProjectsbySortingOrder(action) {
  try{
    const sortingOrder = getNewSortingOrder(action.sortingOrder)
    const sortField = action.sortField;
    const projects = action.changedProjects;
    const description = action.description;
    const sortedProjects = fetchSortedProjects(sortingOrder, sortField, projects)
    yield put(receiveProjectsSort(description, sortingOrder, sortField, sortedProjects))
  }
  catch(e){
    console.log(e);
  }
}

export default function* sortProjects(){
  yield takeLatest(REQUEST_PROJECTS_SORT, sortProjectsbySortingOrder)
}
