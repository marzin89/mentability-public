import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import articleSlice from './slices/article-slice';
import activitySlice from './slices/activity-slice';
import quoteSlice from './slices/quote-slice';

const rootReducer = combineReducers({
    article:  articleSlice.reducer,
    activity: activitySlice.reducer,
    quote:    quoteSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);