import { all } from 'redux-saga/effects';

import { fetchCheckversionDetails } from './checkversion.saga';

export default function* rootSaga() {
  yield all([
    fetchCheckversionDetails(),
   
  ]);
}
