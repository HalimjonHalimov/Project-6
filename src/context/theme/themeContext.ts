import { createContext } from "react";
import type { ThemeContextValue } from "../../types/theme";
import { useContextGuard } from "../useContextGuard";


export const ThemeContext = createContext<ThemeContextValue | null>(null)

export const useTheme = () => {
    return useContextGuard(ThemeContext, "use Theme Context")
}