import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import getProjects from './sagas/projectsApiSagas';
import filterProjects from './sagas/projectsFilterSagas';
import sortProjects from './sagas/projectsSortSagas';
import resetProjects from './sagas/projectsResetSagas';
import changeVwPort from './sagas/uiSagas';

const sagaMiddleware = createSagaMiddleware();
export default createStore(
  rootReducer,
   applyMiddleware(sagaMiddleware)
 );

sagaMiddleware.run(getProjects);
sagaMiddleware.run(filterProjects);
sagaMiddleware.run(sortProjects);
sagaMiddleware.run(resetProjects);
sagaMiddleware.run(changeVwPort);
