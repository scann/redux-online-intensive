//Types
import { types } from './types';

export const authActions = {
    //Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },

    //Async
    loginAsync: (userData) => {
        return {
            type:    types.LOGIN_ASYNC,
            payload: userData,
        };
    },
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },
    initializeAsync: () => {
        return {
            type: types.INITIALIZE_ASYNC,
        };
    },
};
