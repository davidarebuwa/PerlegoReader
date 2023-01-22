import { all } from "redux-saga/effects";

import readerSaga from "./reader/readerSaga";

export default function* rootSaga() {
    yield all([readerSaga()]);
    }
    