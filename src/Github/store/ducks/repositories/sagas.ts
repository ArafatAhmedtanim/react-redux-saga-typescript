import { call, put } from 'redux-saga/effects';
import api from '../../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { CurrUser } from './../../../../UserName/types';

export function* load() {
  try {
    const _currUser = localStorage.getItem('currUser');
    const currUser: CurrUser = JSON.parse(_currUser || '{}')
    console.log(currUser)
    const response = yield call(api.get, `users/${currUser.login}/repos`);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
