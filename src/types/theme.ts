import type { Dispatch, ReactNode } from "react";

export interface PropsChildren {
    children: ReactNode
}

export interface ThemeContextValue {
    state: ThemeType
    dispatch: Dispatch<ActionType>
}


export type ThemeType = "light" | "dark"

export type ActionType = |
{ type: "TOGGLE_THEME" }