import {combineReducers} from 'redux';

import auth from './auth-reducer.js';

const reducer = combineReducers({
    auth
});

export default reducer;