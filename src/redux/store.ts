// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistReducer, persistStore } from 'redux-persist';
// in javascript default import can have any name, but in typescript it should match the export name
// import authReducer from '@/redux/slices/authSlice';
import userReducer from '@/redux/slices/userSlice';
import animalLawReducer from './slices/animalLawSlice';
import blogReducer from './slices/blogSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'animalLaw','blogPosts'], // add the slices you want to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  animalLaw: animalLawReducer,
  blog: blogReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
