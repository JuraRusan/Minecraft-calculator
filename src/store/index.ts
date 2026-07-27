import { useSyncExternalStore } from "react";

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

const STORAGE_KEY = "app-state";

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : DEFAULT_STATE;
  } catch {
    return DEFAULT_STATE;
  }
}

let state: AppState = loadState();
const listeners = new Set<() => void>();

function setState(partial: Partial<AppState>) {
  state = { ...state, ...partial };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useSelectedLanguages() {
  return useSyncExternalStore(subscribe, () => state.selectedLanguages);
}

export function useSelectedTheme() {
  return useSyncExternalStore(subscribe, () => state.selectedTheme);
}

export function setSelectedLanguages(selectedLanguages: LanguagesType) {
  setState({ selectedLanguages });
}

export function setSelectedTheme(selectedTheme: ThemeType) {
  setState({ selectedTheme });
}
