import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchTransactions = createAsyncThunk("fetch/transactions", async () => {

    try {
        const response = await fetch("http://localhost:3001/transactions")
        const transactions = await response.json()
        return transactions
    } catch (error) {
        console.error(error)
    }
})