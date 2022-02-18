import { configureStore } from "@reduxjs/toolkit";
import databaseSlice from "./databaseSlice";



const store = configureStore({
  reducer: {
    database: databaseSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;