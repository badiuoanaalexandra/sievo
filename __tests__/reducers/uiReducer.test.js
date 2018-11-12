import uiReducer from '../../src/reducers/uiReducer';
import {REQUEST_VWWidth_CHANGE, RECEIVE_VWWidth_CHANGE} from "../../src/actions/uiActions"

describe('uiReducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      //this is the default window width set by jest for jsdom
      const initialState = 1024;

      expect(uiReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('REQUEST_VWWidth_CHANGE', () => {
    test('is correct', () => {
      const action = { type: REQUEST_VWWidth_CHANGE };
      //this is the default window width set by jest for jsdom
      const initialState = 1024;

      expect(uiReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('RECEIVE_VWWidth_CHANGE', () => {
    test('is correct', () => {
      const action = { type: RECEIVE_VWWidth_CHANGE };
      //this is the default window width set by jest for jsdom
      const newWidth = 500;
      global.innerWidth = newWidth;

      expect(uiReducer(undefined, action)).toEqual(newWidth);
    });
  });

});
