import { combineReducers } from "@reduxjs/toolkit";
import { changeCurrentDotReducer } from "./slice";

export const dotReducers = combineReducers({
  dot: changeCurrentDotReducer,
});
