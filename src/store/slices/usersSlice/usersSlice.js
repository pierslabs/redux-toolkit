import { createSlice } from '@reduxjs/toolkit';
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    page: 0,
  },
  reducers: {
    setIsLoadingStart: (state /* action */) => {
      state.isLoading = true;
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.users = action.payload.users;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoadingStart, setUsers } = usersSlice.actions;
