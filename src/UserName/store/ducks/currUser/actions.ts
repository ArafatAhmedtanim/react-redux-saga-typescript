import { action } from 'typesafe-actions';
import { UserTypes } from '../../../types';
import { CurrUser } from './../../../types'

export const currUserRequest = (data: string) => action(UserTypes.SET_CURRUSER_REQUEST, { data })
export const currUserSuccess = (data: CurrUser) => action(UserTypes.SET_CURRUSER_SUCCCES, { data })
export const currUserFailure = () => action(UserTypes.SET_CURRUSER_FAILURE);
