import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './slices/usersSlice/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});
