  import { createSlice } from "@reduxjs/toolkit";
  import { LoginApi } from "./LoginApi";
import { RootState } from "../../store/Store";

  interface AuthState {
    users:any;
    loading:boolean,
    error: any,
    userName : string
  }

  const initialState: AuthState = {
    users:[],
    loading:false,
    error: '',
    userName:""
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      addError:(state,action)=>{
        state.error = action.payload
      }
    },
    extraReducers(builder) {
      builder.addCase(LoginApi.fulfilled, (state,action)=>{
        state.users = action.payload;
        state.userName = state.users[0].name
        state.loading = false
        state.error = null
      }),
      builder.addCase(LoginApi.pending,(state)=>{
        state.loading = true
      }),
      builder.addCase(LoginApi.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload || "Error fetching data"
      })
    },
  });

  export default authSlice.reducer;
  export const {addError} = authSlice.actions;

  export const selectUserData = (state:RootState)=> state.auth.users
  export const FetchingError = (state:RootState) => state.auth.error
