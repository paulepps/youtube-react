import {createAction, createRequestTypes, REQUEST, SUCCESS, FAILURE} from './index';
import * as api from '../api/youtube-api';
import {fork, take, takeEvery, call, all, put} from 'redux-saga/effects';
import {fetchEntity} from './index';

export const MOST_POPULAR = createRequestTypes('MOST_POPULAR');
export const mostPopular = {
  request: (amount, loadDescription, nextPageToken) => createAction(MOST_POPULAR[REQUEST], {amount, loadDescription, nextPageToken}),
  success: (response) => createAction(MOST_POPULAR[SUCCESS], {response}),
  failure: (response) => createAction(MOST_POPULAR[FAILURE], {response}),
};

export const VIDEO_CATEGORIES = createRequestTypes('VIDEO_CATEGORIES');
export const categories = {
  request: () => createAction(VIDEO_CATEGORIES[REQUEST]),
  success: (response) => createAction(VIDEO_CATEGORIES[SUCCESS], {response}),
  failure: (response) => createAction(VIDEO_CATEGORIES[FAILURE], {response}),
}
