import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {
      state.value = action.payload
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
// pull the user data
export const selectUser = (state) => state.counter.value;

export default userSlice.reducer;
