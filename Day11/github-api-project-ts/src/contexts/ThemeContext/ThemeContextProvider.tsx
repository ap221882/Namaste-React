import { ReactElement, useState } from "react";
import { ThemeContext } from "./ThemeContext";

type Props = {
  children: ReactElement;
};

const ThemeContextProvider = ({ children }: Props) => {
  const [mode, setMode] = useState("light");

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
