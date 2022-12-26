import { createContext, useContext } from "react";

import { UseStringValue, UseStringSetValue } from "../../hooks/typesHooks";

interface IThemeContext {
  mode: UseStringValue;
  setMode: UseStringSetValue;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const useThemeContext = () => useContext(ThemeContext);
