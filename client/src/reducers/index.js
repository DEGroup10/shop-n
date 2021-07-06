import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import categoryReducer from './category.reducer';
import locationReducers from './location.reducers';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    auth : authReducer,
    user:userReducer,
    category: categoryReducer,
    location: locationReducers
});



export default rootReducer;