import {createActions} from 'redux-actions';
import keyMirror from 'key-mirror';

export const actionTypes = keyMirror({
    SET_ARTICLE_INDEX: null,
    FETCH_ARTICLE_REQUEST: null,
    FETCH_ARTICLE_SUCCESS: null,
    FETCH_ARTICLE_FAILURE: null,
});

export const {fetchArticleRequest, fetchArticleSuccess, fetchArticleFailure} = createActions(
    actionTypes.FETCH_ARTICLE_REQUEST,
    actionTypes.FETCH_ARTICLE_SUCCESS,
    actionTypes.FETCH_ARTICLE_FAILURE,
);

export const {setArticleIndex} = createActions(
    actionTypes.SET_ARTICLE_INDEX,
);





