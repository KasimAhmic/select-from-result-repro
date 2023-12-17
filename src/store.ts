import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  jsonPlaceholderApiMiddleware,
  jsonPlaceholderApiReducer,
  jsonPlaceholderApiReducerPath,
} from './apis/json-placeholder.api';

const reducers = combineReducers({
  [jsonPlaceholderApiReducerPath]: jsonPlaceholderApiReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([jsonPlaceholderApiMiddleware]),
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
