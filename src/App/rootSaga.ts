import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './../Github/types';
import { load } from './../Github/store/ducks/repositories/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);
}
