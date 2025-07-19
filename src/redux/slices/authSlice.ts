// src/redux/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the User type
interface User {
  email: string;
  name: string;
}

// Define the AuthState type using the User interface
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
