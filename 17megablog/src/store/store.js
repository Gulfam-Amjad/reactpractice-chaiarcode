// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'; // this is the reducer you exported

const store = configureStore({
  reducer: {
    auth: authReducer  // now you can access auth state like state.auth.status
  }
});

export default store;
