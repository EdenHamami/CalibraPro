// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"; // מייבאים את הסלייס

export const store = configureStore({
  reducer: {
    auth: authReducer, // מחברים את הסלייס ל־store
  },
});

// טיפוסים לשימוש ב־useSelector ו־useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
