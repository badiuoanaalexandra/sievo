import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import mySaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();
export default createStore(
  rootReducer,
   applyMiddleware(sagaMiddleware)
 );

sagaMiddleware.run(mySaga);
