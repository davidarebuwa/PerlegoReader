import { all } from "redux-saga/effects";

import articleSaga from "./article/articleSaga";

export default function* rootSaga() {
  yield all([articleSaga()]);
}
