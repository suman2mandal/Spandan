import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id?: string;
  name: string;
  email: string;
  image?: string | null;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      console.log("User logged in:...........", action.payload);
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      console.log('User logged out. Current state:', state);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
