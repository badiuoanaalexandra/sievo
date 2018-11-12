import configureStore from 'redux-mock-store';

import * as projectsFilterActions from "../../src/actions/projectsFilterActions"

const mockStore = configureStore();
const store = mockStore();


describe('projectsFilterActions', () => {
  const description = "test descr";
  const descriptionField = "description";
  const sortingOrder = "asc";
  const sortField = "project";

  beforeEach(() => {
    store.clearActions();
  });

  describe('requestProjectsFilter', () => {
    test('Dispatches the correct action and payload', () => {
      const filterProjects = [{"project":1, "description":"test 1"}];
      const expectedActions = [
        {
          'type': 'REQUEST_PROJECTS_FILTER',
          description,
          descriptionField,
          sortingOrder,
          sortField,
          filterProjects
        },
      ];

      store.dispatch(projectsFilterActions.requestProjectsFilter(description, descriptionField, sortingOrder, sortField, filterProjects));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

describe('receiveProjectsFilter', () => {
  test('Dispatches the correct action and payload', () => {
    const changedProjects = [{"project":1, "description":"test 1"}];
    const expectedActions =[
      {
        'type': 'RECEIVE_PROJECTS_FILTER',
        description,
        sortingOrder,
        sortField,
        changedProjects
      }];

    store.dispatch(projectsFilterActions.receiveProjectsFilter(description, sortingOrder, sortField, changedProjects));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

});
