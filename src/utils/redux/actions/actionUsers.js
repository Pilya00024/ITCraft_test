import * as types from '../actions/actionTypes';

export const entryUser = ({email, password, isAuthorization}) => ({
    type: types.ENTRY_USER,
    email,
    password,
    isAuthorization,
})

export const logOutUser = () => ({
    type: types.LOGOUT_USER,
})