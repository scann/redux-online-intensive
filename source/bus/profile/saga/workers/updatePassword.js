//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';
import { notificationActions } from '../../../notification/actions';

export function* updatePassword ({ payload: {
    oldPassword, newPassword,
}}) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.profile.updateProfile, [{ oldPassword, newPassword }]);
        const { data: updatedProfile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }
        yield put(notificationActions.showNotification('Пароль успешно изменен!'));
    } catch (error) {
        yield put(uiActions.emitError(error, 'updatePassword worker'));
        yield put(
            notificationActions.showNotification(
                'Пароль не был изменён',
                'error',
                'updatePassword'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
