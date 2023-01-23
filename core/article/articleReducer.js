/* eslint-disable no-undef */
import { Record } from "immutable";

const {
  SET_ARTICLE_INDEX,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} = require("./articleActions").actionTypes;

const InitialState = Record({
  isFetching: false,
  error: null,
  articles: [],
  articleIndex: 0,
});

export default function articleReducer(
  state = new InitialState(),
  { type, payload }
) {
  switch (type) {
    case SET_ARTICLE_INDEX:
      return state.set("articleIndex", payload);
    case FETCH_ARTICLES_REQUEST:
      return state.set("isFetching", true);
    case FETCH_ARTICLES_SUCCESS:
      return state.set("isFetching", false).set("articles", payload);
    case FETCH_ARTICLES_FAILURE:
      return state.set("isFetching", false).set("error", payload.error);
    default:
      return state;
  }
}
