import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { historicalDatesReducers } from "./dates";
import { dotReducers } from "./dots";

const appReducer = combineReducers({
  dates: historicalDatesReducers,
  dots: dotReducers,
});

export type RootCombine = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootCombine, action) => {
  return appReducer(state, action);
};
