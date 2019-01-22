//Core
import { combineReducers } from 'redux';

//Reducers
import { galleryReducer } from '../bus/components/reducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});