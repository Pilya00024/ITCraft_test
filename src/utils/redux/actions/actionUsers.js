import * as types from '../actions/actionTypes';

export const entryUser = ({email, password, isAuthorization}) =>({
    type: types.ENTRY_USER,
    email,
    password,
    isAuthorization,
})