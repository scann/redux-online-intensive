//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { updateName } from './workers';

export function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}

export function* watchProfile () {
    yield all([call(watchUpdateName)]);
}
