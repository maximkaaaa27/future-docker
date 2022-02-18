import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPerson } from "../components/MainTable";
import { RootState } from "./store";

interface IInitialState {
  database: null | IPerson[]
}

const initialState: IInitialState = {
  database: null
}

const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {
    setDataBase: (state, action: PayloadAction<IPerson[]>) => ({...state, database: action.payload})
  }
})



export const { setDataBase } = databaseSlice.actions;
export const selecDatabase = (state: RootState) => state;
export default databaseSlice.reducer;