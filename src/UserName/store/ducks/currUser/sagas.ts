import { call, put } from 'redux-saga/effects';
import api from '../../../../services/api';

import { currUserSuccess, currUserFailure } from './actions';
import { CurrUser } from './../../../types'

export function* userNameRequest(action: any) {
    try {
        const response = yield call(api.get, `users/${action.payload.data}`);
        const currUser: CurrUser = {
            id: response.data.id,
            login: response.data.login,
            name: response.data.name,
            image: response.data.avatar_url
        }

        localStorage.setItem('currUser', JSON.stringify(currUser));
        yield put(currUserSuccess(currUser));
    } catch (err) {
        yield put(currUserFailure());
    }
}
