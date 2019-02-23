//Core
import { createStore, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

//Reducers
import { postsReducer as posts } from '../../bus/posts/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';
import { authReducer as auth } from '../../bus/auth/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { formsReducer as forms } from '../../bus/forms/reducer';

//Store
import { store } from '../store';

const referenceRootReducer = combineReducers({
    auth,
    ui,
    posts,
    profile,
    router,
    forms,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
