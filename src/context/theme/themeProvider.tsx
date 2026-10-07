import { useReducer } from "react";
import type { ActionType, PropsChildren, ThemeType } from "../../types/theme";
import { ThemeContext } from "./themeContext";

const initialTheme: ThemeType = "light";

const reducer = (state: ThemeType, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

const ThemeProvider = ({ children }: PropsChildren) => {
  const [state, dispatch] = useReducer(reducer, initialTheme);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
