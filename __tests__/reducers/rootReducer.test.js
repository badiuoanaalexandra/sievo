import { createStore } from 'redux';
import rootReducer from '../../src/reducers/rootReducer';

import * as uiActions from "../../src/actions/uiActions"
import * as projectsFilterActions from "../../src/actions/projectsFilterActions"
import * as projectsApiActions from "../../src/actions/projectsApiActions"


let store = createStore(
  rootReducer
 );

 describe('rootReducer', () => {
   describe('INITIAL_STATE', () => {
     test('is correct', () => {

       const initialState = {
         uiReducer:1024,
         projectsReducer:null,
         displayProjectsReducer:{changed:false, description:"", sortingOrder:"", changedProjects:null}
       };

       expect(store.getState()).toEqual(initialState);
     });
   });

   describe('Dispatch actions', () => {
     test('is correct', () => {

        const description = "test descr";
        const sortingOrder = "asc";
        const sortField = "project";
        const changedProjects = [{"project":"1", "description":"test receive 1"}];
        const projects = [{"project":"2", "description":"test receive 2"}];

        const stateDisplayReducer = {changed:true,
         description,
         sortingOrder,
         sortField,
         changedProjects}

        const newWidth = 500;
        global.innerWidth = newWidth;

        const newState = {
           uiReducer:500,
           projectsReducer:projects,
           displayProjectsReducer:stateDisplayReducer
         };

         store.dispatch(projectsApiActions.receiveProjectsData(projects));
         store.dispatch(projectsFilterActions.receiveProjectsFilter(description, sortingOrder, sortField, changedProjects));
         store.dispatch(uiActions.receiveVwChange());

         expect(store.getState()).toEqual(newState);
     });
   });

 });
