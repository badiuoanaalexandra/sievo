import { call, put, takeLatest } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import getProjects from '../../src/sagas/projectsApiSagas';
import { fetchProjects } from '../../src/helpers/projectsApi';
import { getProjectsFromApi } from '../../src/sagas/projectsApiSagas';
import {REQUEST_PROJECTS_DATA, RECEIVE_PROJECTS_DATA} from "../../src/actions/projectsApiActions"

describe('projectsApiSagas', () => {

  describe('getProjects', () => {
    test('is correct', () => {
      const generator = getProjects();
      expect(generator.next().value).toEqual(takeLatest(REQUEST_PROJECTS_DATA, getProjectsFromApi));
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('getProjectsFromApi', () => {
    test('is correct', () => {
      const generator = getProjectsFromApi();
      expect(generator.next().value).toEqual(call(fetchProjects));
      expect(generator.next().value).toEqual(put({type:RECEIVE_PROJECTS_DATA, projects:undefined}));
      expect(generator.next().done).toEqual(true);
    });
  });

});
