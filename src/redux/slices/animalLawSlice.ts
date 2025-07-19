import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Law } from '@/types/law';

interface AnimalLawState {
  laws: Law[];
}

const initialState: AnimalLawState = {
  laws: [],
};

const animalLawSlice = createSlice({
  name: 'animalLaw',
  initialState,
  reducers: {
    setLaws: (state, action: PayloadAction<Law[]>) => {
      state.laws = action.payload;
    },
  },
});

export const { setLaws } = animalLawSlice.actions;
export default animalLawSlice.reducer;
