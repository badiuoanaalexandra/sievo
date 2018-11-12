import { call, put, takeLatest } from 'redux-saga/effects';
import changeVwPort from '../../src/sagas/uiSagas';
import { changeViewportWidth } from '../../src/sagas/uiSagas';

import {REQUEST_VWWidth_CHANGE, RECEIVE_VWWidth_CHANGE} from "../../src/actions/uiActions"

describe('uiSagas', () => {

  describe('changeVwPort', () => {
    test('is correct', () => {
      const generator = changeVwPort();
      expect(generator.next().value).toEqual(takeLatest(REQUEST_VWWidth_CHANGE, changeViewportWidth));
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('changeViewportWidth', () => {
    test('is correct', () => {
      const generator = changeViewportWidth();
      expect(generator.next().value).toEqual(put({type:RECEIVE_VWWidth_CHANGE}));
      expect(generator.next().done).toEqual(true);
    });
  });

});
