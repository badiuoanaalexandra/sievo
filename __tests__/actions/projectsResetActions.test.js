import configureStore from 'redux-mock-store';

import * as projectsResetActions from "../../src/actions/projectsResetActions"

const mockStore = configureStore();
const store = mockStore();

describe('projectsResetActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('requestProjectsReset', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': 'REQUEST_PROJECTS_RESET'
        },
      ];

      store.dispatch(projectsResetActions.requestProjectsReset());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

describe('receiveProjectsReset', () => {
  test('Dispatches the correct action and payload', () => {
    const expectedActions =[
      {
        'type': 'RECEIVE_PROJECTS_RESET'
      }];

    store.dispatch(projectsResetActions.receiveProjectsReset());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

});
