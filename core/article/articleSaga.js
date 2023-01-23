/* eslint-disable no-undef */
import { call, put, takeEvery } from "redux-saga/effects";

import PLANETS from "../../constants/planets";
import { fetchArticleSuccess, fetchArticleFailure } from "./articleActions";
const { FETCH_ARTICLE_REQUEST } = require("./articleActions").actionTypes;

//REDUNDANT SAGA FUNCTION

function* fetchArticles(action) {
  try {
    const planets = Object.values(PLANETS);
    const selectedPlanet = planets[0].filter((planet) => planet.title === action.payload.planet);
    yield put(fetchArticleSuccess(selectedPlanet));
  } catch (e) {
    yield put(fetchArticleFailure(e.message));
  }
}

export default function* articleSaga() {
  yield takeEvery(FETCH_ARTICLE_REQUEST, fetchArticles);
}
