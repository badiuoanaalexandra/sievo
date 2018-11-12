import projectsReducer from '../../src/reducers/projectsReducer';
import {REQUEST_PROJECTS_DATA, RECEIVE_PROJECTS_DATA} from "../../src/actions/projectsApiActions"

describe('projectsReducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = null;

      expect(projectsReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('REQUEST_PROJECTS_DATA', () => {
    test('is correct', () => {
      const action = { type: REQUEST_PROJECTS_DATA };
      const initialState = null;

      expect(projectsReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('RECEIVE_PROJECTS_DATA', () => {
    test('is correct', () => {
      const projects = [{"project":"", "description":""}]
      const action = { type: RECEIVE_PROJECTS_DATA, projects };

      expect(projectsReducer(undefined, action)).toEqual(projects);
    });
  });

});
