import { call, put, takeLatest } from 'redux-saga/effects';
import resetProjects from '../../src/sagas/projectsResetSagas';
import { getProjectsReset } from '../../src/sagas/projectsResetSagas';
import {REQUEST_PROJECTS_RESET, RECEIVE_PROJECTS_RESET} from "../../src/actions/projectsResetActions"

describe('projectsResetSagas', () => {

  describe('resetProjects', () => {
    test('is correct', () => {
      const generator = resetProjects();
      expect(generator.next().value).toEqual(takeLatest(REQUEST_PROJECTS_RESET, getProjectsReset));
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('receiveProjectsReset', () => {
    test('is correct', () => {
      const generator = getProjectsReset();
      expect(generator.next().value).toEqual(put({type:RECEIVE_PROJECTS_RESET}));
      expect(generator.next().done).toEqual(true);
    });
  });

});
