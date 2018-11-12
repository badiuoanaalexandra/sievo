import displayProjectsReducer from '../../src/reducers/displayProjectsReducer';
import {REQUEST_PROJECTS_FILTER, RECEIVE_PROJECTS_FILTER} from "../../src/actions/projectsFilterActions"
import {REQUEST_PROJECTS_SORT, RECEIVE_PROJECTS_SORT} from "../../src/actions/projectsSortActions"
import {REQUEST_PROJECTS_RESET, RECEIVE_PROJECTS_RESET} from "../../src/actions/projectsResetActions"

describe('displayProjectsReducer initialState', () => {
  const initialState = {changed:false, description:"", sortingOrder:"", changedProjects:null};

  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      expect(displayProjectsReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('REQUEST_PROJECTS_FILTER', () => {
    test('is correct', () => {
      const action = { type: REQUEST_PROJECTS_FILTER };
      expect(displayProjectsReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('REQUEST_PROJECTS_SORT', () => {
    test('is correct', () => {
      const action = { type: REQUEST_PROJECTS_SORT };
      expect(displayProjectsReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('REQUEST_PROJECTS_RESET', () => {
    test('is correct', () => {
      const action = { type: REQUEST_PROJECTS_RESET };
      expect(displayProjectsReducer(undefined, action)).toEqual(initialState);
    });
  });
});

describe('displayProjectsReducer receive actions', () => {
  const initialState = {changed:false,
    description:"",
    sortingOrder:"",
    changedProjects:null};

  const description = "test descr";
  const sortingOrder = "asc";
  const sortField = "project";
  const changedProjects = [{"project":"1", "description":"test receive"}];

  const stateReducer = {changed:true,
    description,
    sortingOrder,
    sortField,
    changedProjects}

  describe('RECEIVE_PROJECTS_FILTER', () => {
    test('is correct', () => {
      const action = { type: RECEIVE_PROJECTS_FILTER,
        description,
        sortingOrder,
        sortField,
        changedProjects};

      expect(displayProjectsReducer(undefined, action)).toEqual(stateReducer);
    });
  });

  describe('REQUEST_PROJECTS_SORT', () => {
    test('is correct', () => {
      const action = { type: RECEIVE_PROJECTS_SORT,
        description,
        sortingOrder,
        sortField,
        changedProjects};
      expect(displayProjectsReducer(undefined, action)).toEqual(stateReducer);
    });
  });

  describe('REQUEST_PROJECTS_RESET', () => {
    test('is correct', () => {
      const action = { type: REQUEST_PROJECTS_RESET };
      expect(displayProjectsReducer(undefined, action)).toEqual(initialState);
    });
  });

});
