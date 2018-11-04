import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import getProjects from './sagas/projectsApiSagas';
import filterProjects from './sagas/projectsFilterSagas';

const sagaMiddleware = createSagaMiddleware();
export default createStore(
  rootReducer,
   applyMiddleware(sagaMiddleware)
 );

sagaMiddleware.run(getProjects);
sagaMiddleware.run(filterProjects);
