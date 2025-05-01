import { createSlice } from "@reduxjs/toolkit";
import { TransactionsTypes } from "./TransactionDatasType";
import { RootState } from "../../store/Store";
import { FetchTransactions } from "../../components/dashboard/FetchTransactions";

interface InitialStateTypes {
  allTransactions: TransactionsTypes[];
  loading: "idle" | 'loading' | 'succeed' | 'failed'
}

const initialState: InitialStateTypes = {
  allTransactions: [],
  loading: 'idle'
};
export const TransactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addNewTransaction:(state,action)=>{
      const newTransaction = {...action.payload,id:state.allTransactions.length+1}
      state.allTransactions.push(newTransaction)
    },
    removeTransaction:(state,action)=>{
      state.allTransactions = state.allTransactions.filter((data)=> data.id !== action.payload)
    },
    updateTransaction: (state, action) => {
      const index = state.allTransactions.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.allTransactions[index] = action.payload;
      }
    }
  },
  extraReducers(builder) {
    builder
    .addCase(FetchTransactions.pending,(state)=>{
      state.loading = "loading"
    })
    .addCase(FetchTransactions.fulfilled,(state,action)=>{
      state.allTransactions = action.payload;
    })
    .addCase(FetchTransactions.rejected,(state)=>{
      state.loading = "failed";
    })
  },
});


export  default TransactionSlice.reducer;
export const{addNewTransaction,removeTransaction,updateTransaction} = TransactionSlice.actions;


//All Transaction Data
export const selectAllTransaction = (state:RootState)=> state.transaction.allTransactions;
export const transactionLoading = (state:RootState)=> state.transaction.loading;

