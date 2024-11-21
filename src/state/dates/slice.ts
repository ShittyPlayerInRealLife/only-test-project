import { createSlice } from "@reduxjs/toolkit";
import { datesState } from "./state";
import { TDatesState } from "../../types/types";

const historicalDatesSlice = createSlice({
  name: "dates",
  initialState: datesState as TDatesState[],
  reducers: {},
});

// export const changeContentAction = historicalDatesSlice.actions
export const changeContentReducer = historicalDatesSlice.reducer;
