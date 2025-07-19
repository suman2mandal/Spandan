'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  _id?: string;
  name: string;
  email: string;
}

const initialState: { user: User | null } = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    loadUserFromStorage: (state) => {
      const data = localStorage.getItem('user');
      if (data) state.user = JSON.parse(data);
    },
  },
});

export const { login, logout, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
