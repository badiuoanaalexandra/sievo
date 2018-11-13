import configureStore from 'redux-mock-store';

import * as projectsSortActions from "../../src/actions/projectsSortActions"

const mockStore = configureStore();
const store = mockStore();

describe('projectsSortActions', () => {
  const description = "test descr";
  const sortingOrder = "asc";
  const sortField = "project";
  const changedProjects = [{"project":1, "description":"test 1"}];

  beforeEach(() => {
    store.clearActions();
  });

  describe('requestProjectsSort', () => {
    test('Dispatches the correct action and payload', () => {

      const expectedActions = [
        {
          'type': 'REQUEST_PROJECTS_SORT',
          description,
          sortingOrder,
          sortField,
          changedProjects
        },
      ];

      store.dispatch(projectsSortActions.requestProjectsSort(description, sortingOrder, sortField, changedProjects));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

describe('receiveProjectsSort', () => {
  test('Dispatches the correct action and payload', () => {
    const changedProjects = [{"project":1, "description":"test 1"}];
    const expectedActions =[
      {
        'type': 'RECEIVE_PROJECTS_SORT',
        description,
        sortingOrder,
        sortField,
        changedProjects
      }];

    store.dispatch(projectsSortActions.receiveProjectsSort(description, sortingOrder, sortField, changedProjects));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

});
