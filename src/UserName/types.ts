export enum UserTypes {
    SET_CURRUSER_REQUEST = '@currUser/LOAD_REQUEST',
    SET_CURRUSER_SUCCCES = '@currUser/LOAD_SUCCCES',
    SET_CURRUSER_FAILURE = '@currUser/LOAD_FAILURE'
}

export interface CurrUser {
    id: number,
    login: string,
    name: string,
    image: string
}

export interface UserState {
    data?: any
    readonly loading: boolean
    readonly error: boolean
}