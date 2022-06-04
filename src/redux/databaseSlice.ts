import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPerson } from "components/Table";
import { RootState } from "./store";

interface IInitialState {
  database: null | IPerson[];
  loading: boolean;
}

const initialState: IInitialState = {
  database: null,
  loading: false,
};

const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    setDataBase: (state, action: PayloadAction<IPerson[]>) => ({
      ...state,
      database: action.payload,
    }),

    setLoading: (state) => ({ ...state, loading: !state.loading }),
  },
});

export const { setDataBase, setLoading } = databaseSlice.actions;
export const selecDatabase = (state: RootState) => state;
export default databaseSlice.reducer;
