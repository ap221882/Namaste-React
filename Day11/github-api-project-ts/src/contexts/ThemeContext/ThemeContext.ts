import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface IThemeContext {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const useThemeContext = () => useContext(ThemeContext);
