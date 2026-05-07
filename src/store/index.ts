import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import type { LanguagesType } from "@/localization";
import type { ThemeType } from "@/theme";

type AppState = {
  selectedLanguages: LanguagesType;
  selectedTheme: ThemeType;
};

const DEFAULT_STATE: AppState = {
  selectedLanguages: "en",
  selectedTheme: "dark",
};

export const appReducer = createSlice({
  name: "appReducer",
  initialState: DEFAULT_STATE,
  reducers: {
    setSelectedLanguages: (state, action: PayloadAction<LanguagesType>) => {
      state.selectedLanguages = action.payload;
    },
    setSelectedTheme: (state, action: PayloadAction<ThemeType>) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: appReducer.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
