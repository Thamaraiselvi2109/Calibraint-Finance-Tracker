import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginApi = createAsyncThunk("login/user", async () => {
  try {
    const response = await axios.get("http://localhost:3001/users");
    return response.data;
  } catch (err:any) {
    console.error(err.message);
    return err.message
  }
});
