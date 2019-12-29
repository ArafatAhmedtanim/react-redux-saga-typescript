import { action } from 'typesafe-actions';
import { UserTypes, User } from './../../../types';

export const loadRequest = (data: User) => action(UserTypes.LOAD_REQUEST, { data });

export const loadSuccess = (data: User) => action(UserTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(UserTypes.LOAD_FAILURE);
