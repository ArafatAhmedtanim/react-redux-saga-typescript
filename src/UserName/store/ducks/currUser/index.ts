import { Reducer } from 'redux';
import { UserState, UserTypes } from '../../../types';

const INITIAL_STATE: UserState = {
    data: null,
    error: false,
    loading: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.SET_CURRUSER_REQUEST:
            return {
                ...state, loading: true, error: false, data: action.payload.data
            };
        case UserTypes.SET_CURRUSER_SUCCCES:
            return {
                ...state, loading: false, error: false, data: action.payload.data,
            };
        case UserTypes.SET_CURRUSER_FAILURE:
            return {
                ...state, loading: false, error: true, data: [],
            };
        default:
            return state;
    }
};

export default reducer;
