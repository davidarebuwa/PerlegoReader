/* eslint-disable no-undef */
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchApi } from "../api";

import { fetchArticlesSuccess, fetchArticlesFailure } from "./readerActions";
const {FETCH_ARTICLES_REQUEST}  = require("./readerActions").actionTypes;


function* fetchArticles(action) {
    try {
        const response = yield call(fetchApi, {
        method: "GET",
        url: action.payload.term + "_(planet)"
        });
        yield put(fetchArticlesSuccess(response.data));
    } catch (e) {
        yield put(fetchArticlesFailure(e.message));
    }
    }

    export default function* readerSaga() {
    yield takeEvery(FETCH_ARTICLES_REQUEST, fetchArticles);
    }
    
