import {combineReducers} from 'redux';

import readerReducer from './reader/readerReducer';
import isLoadingReducer from './reducers/isLoadingReducer';
import errorReducer from './reducers/errorReducer';

const rootReducer = combineReducers({
    reader: readerReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
});

export default rootReducer;

