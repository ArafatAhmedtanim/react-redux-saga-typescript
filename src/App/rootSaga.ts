import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './../Github/types';
import { UserTypes } from './../UserName/types';

import { load } from './../Github/store/ducks/repositories/sagas';
import { userNameRequest } from '../UserName/store/ducks/currUser/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    takeLatest(UserTypes.SET_CURRUSER_REQUEST, userNameRequest)
  ]);
}
