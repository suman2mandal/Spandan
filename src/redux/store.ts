import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/redux/slices/authSlice';
import animalLawReducer from './slices/animalLawSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    animalLaw: animalLawReducer,
  },
});

// Infer the types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
