import { call, put, takeLatest } from 'redux-saga/effects';
import filterProjects from '../../src/sagas/projectsFilterSagas';
import { filterProjectsbyField } from '../../src/sagas/projectsFilterSagas';
import { fetchFilteredProjects } from '../../src/helpers/projectsFilter'


import {REQUEST_PROJECTS_FILTER, RECEIVE_PROJECTS_FILTER} from "../../src/actions/projectsFilterActions"

describe('projectsFilterSagas2', () => {

  describe('filterProjects', () => {
    test('is correct', () => {
      const generator = filterProjects();
      expect(generator.next().value).toEqual(takeLatest(REQUEST_PROJECTS_FILTER, filterProjectsbyField));
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('filterProjectsbyField', () => {
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

      const generator = filterProjectsbyField(action);
      expect(generator.next().value).toEqual(call(fetchFilteredProjects, description, descriptionField, undefined));
      expect(generator.next().value).toEqual(put({type:RECEIVE_PROJECTS_FILTER, description, sortingOrder, sortField, changedProjects:null}));
    });
  });

});
