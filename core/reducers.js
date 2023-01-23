import { combineReducers } from "redux";

import articleReducer from "./article/articleReducer";
import isLoadingReducer from "./reducers/isLoadingReducer";
import errorReducer from "./reducers/errorReducer";

const rootReducer = combineReducers({
  article: articleReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default rootReducer;
