import * as types from '../actions/actionTypes';

const user = {
    isAuthorization: false,
    email: '',
    password: '',
};

const currentUser = (state = user, {type, email, password, isAuthorization}) => {
    switch (type) {
      case types.ENTRY_USER:
        return { 
            ...state,
            isAuthorization,
            email,
            password,
         };
      default:
        return state;
    }
  };

export default currentUser;