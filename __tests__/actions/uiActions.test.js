import configureStore from 'redux-mock-store';

import * as uiActions from "../../src/actions/uiActions"

const mockStore = configureStore();
const store = mockStore();


describe('uiActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('requestVwChange', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': 'REQUEST_VWWidth_CHANGE'
        },
      ];

      store.dispatch(uiActions.requestVwChange());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

describe('receiveVwChange', () => {
  test('Dispatches the correct action and payload', () => {
    const expectedActions =[
      {
        'type': 'RECEIVE_VWWidth_CHANGE'
      }];

    store.dispatch(uiActions.receiveVwChange());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

});
