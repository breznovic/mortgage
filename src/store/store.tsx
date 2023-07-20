import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import mortgageReducer from "./features/mortgageSlice";

export const store = configureStore({
  reducer: {
    mortgage: mortgageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
