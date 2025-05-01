import { createAsyncThunk } from "@reduxjs/toolkit";

export const LoginApi = createAsyncThunk("login/user", async () => {
  try {
    const response = await fetch("http://localhost:3001/users");
    const user = await response.json();
    return user;
  } catch (err:any) {
    console.error(err.message);
    return err.message
  }
});
