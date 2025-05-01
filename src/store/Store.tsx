import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import transactionReducer from '../features/transaction/TransactionSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transaction:transactionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
