import { combineReducers } from 'redux';
import currentUser from './reducers/usersReducers';
import marketList from './reducers/marketReducer';

const rootReducer = combineReducers({
    currentUser,
    marketList,
});

export default rootReducer;