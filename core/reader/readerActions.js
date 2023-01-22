import {createActions} from 'redux-actions';
import keyMirror from 'key-mirror';

export const actionTypes = keyMirror({
    SET_PAGE,
    FETCH_ARTICLE_REQUEST: null,
    FETCH_ARTICLE_SUCCESS: null,
    FETCH_ARTICLE_FAILURE: null,
});

export const {fetchArticlesRequest, fetchArticlesSuccess, fetchArticlesFailure} = createActions(
    actionTypes.FETCH_ARTICLE_REQUEST,
    actionTypes.FETCH_ARTICLE_SUCCESS,
    actionTypes.FETCH_ARTICLE_FAILURE,
);


export const {setPage} = createActions(
    actionTypes.SET_PAGE,
);
