import { call, put, takeLatest } from 'redux-saga/effects';
import sortProjects from '../../src/sagas/projectsSortSagas';
import { sortProjectsbySortingOrder } from '../../src/sagas/projectsSortSagas';

import { fetchSortedProjects, getNewSortingOrder } from '../../src/helpers/projectsSort'


import {REQUEST_PROJECTS_SORT, RECEIVE_PROJECTS_SORT} from "../../src/actions/projectsSortActions"

describe('projectsSortSagas', () => {

  describe('sortProjects', () => {
    test('is correct', () => {
      const generator = sortProjects();
      expect(generator.next().value).toEqual(takeLatest(REQUEST_PROJECTS_SORT, sortProjectsbySortingOrder));
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('sortProjectsbySortingOrder', () => {
    test('is correct', () => {
      const description = "test descr";
      const descriptionField = "description";
      const sortingOrder = "asc";
      const sortField = "project";

      const action = {
        description,
        descriptionField,
        sortingOrder,
        sortField
      }

      const generator = sortProjectsbySortingOrder(action);
      expect(generator.next().value).toEqual(put({type:RECEIVE_PROJECTS_SORT, description, sortingOrder:"desc", sortField, changedProjects:null}));
    });
  });

});
