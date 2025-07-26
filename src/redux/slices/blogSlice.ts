import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '@/types/post';

interface BlogState {
  post: Post[];
}

const initialState: BlogState = {
  post: [],
};

const blogSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<Post[]>) => {
      state.post = action.payload;
    },
  },
});

export const { setBlog } = blogSlice.actions;
export default blogSlice.reducer;
