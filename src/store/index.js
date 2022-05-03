import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
// import rootReducer from '../redux/reducers'
// import mySaga from '../redux/sagas'

import rootSaga from '../redux/sagas/index';
import rootReducer from '../redux/reducers/index';

const configureStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  //mount it on the Store
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  // then run the saga
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
