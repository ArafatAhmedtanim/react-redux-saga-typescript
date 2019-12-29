/**
 * Action types
 */
export enum UserTypes {
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface User {
    userName: string
}

/**
 * State type
 */
export interface UserState {
    readonly data: User
    readonly loading: boolean
    readonly error: boolean
}