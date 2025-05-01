import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchTransactions = createAsyncThunk("fetch/transactions", async () => {

    try {
        const response = await axios.get("http://localhost:3001/transactions")
        return response.data
    } catch (error) {
        console.error(error)
    }
})