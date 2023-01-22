/* eslint-disable no-undef */
import { Record } from "immutable";

const {
  SET_PAGE,
} = require("./readerActions").actionTypes;

const InitialState = Record({
  isFetching: false,
  error: null,
  page: 1,
  pageCount: 0,
  articles: [],
  articleIndex: 0,
});

export default function bookReducer(
  state = new InitialState(),
  { type, payload }
) {
  switch (type) {
    case SET_PAGE:
      return state.set("page", payload.page);
    default:
      return state;
  }
}
