import { configureStore } from '@reduxjs/toolkit';
// We will import slices here later

export const store = configureStore({
  reducer: {
    // auth: authSlice,
  },
});