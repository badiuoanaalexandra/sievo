import configureStore from 'redux-mock-store';

import * as projectsApiActions from "../../src/actions/projectsApiActions"

const mockStore = configureStore();
const store = mockStore();



describe('projectsApiActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('requestProjectsData', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'type': 'REQUEST_PROJECTS_DATA'
        },
      ];

      store.dispatch(projectsApiActions.requestProjectsData());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

describe('receiveProjectsData', () => {
  test('Dispatches the correct action and payload', () => {
    const projects = {"project":1, "description":"test 1"};
    const expectedActions =[
      {
        'type': 'RECEIVE_PROJECTS_DATA',
         projects
      }];

    store.dispatch(projectsApiActions.receiveProjectsData(projects));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

});
