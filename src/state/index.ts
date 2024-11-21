import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootCombine, rootReducer } from "./store";

export const store = configureStore({ reducer: rootReducer });

export const useAppSelector: TypedUseSelectorHook<RootCombine> = useSelector;
