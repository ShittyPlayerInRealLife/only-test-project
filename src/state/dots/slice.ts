import { dotsState } from "./state";
import { createSlice } from "@reduxjs/toolkit";
import { TDotState } from "../../types/types";

const DotsSlice = createSlice({
  name: "dots",
  initialState: dotsState as TDotState[],
  reducers: {},
});

// export const changeCurrentDotAction = DotsSlice.actions
export const changeCurrentDotReducer = DotsSlice.reducer;
