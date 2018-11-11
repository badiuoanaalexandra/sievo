import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

import {REQUEST_VWWidth_CHANGE, receiveVwChange} from '../actions/uiActions'

export function* changeViewportWidth(action) {
  try{
    yield put(receiveVwChange())
  }
  catch(e){
    console.log(e);
  }
}

export default function* changeVwPort(){
  yield takeLatest(REQUEST_VWWidth_CHANGE, changeViewportWidth)
}
