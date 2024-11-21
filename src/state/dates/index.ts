import { combineReducers } from "@reduxjs/toolkit";
import { changeContentReducer } from "./slice";

export const historicalDatesReducers = combineReducers({
  historicalDates: changeContentReducer,
});
