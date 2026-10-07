import type { PropsChildren } from "../types/theme";
import { ProductProvider } from "./products/productsProvider";
import ThemeProvider from "./theme/themeProvider";

export const AppProvider = ({ children }: PropsChildren) => {
  return (
    <ThemeProvider>
      <ProductProvider>{children}</ProductProvider>
    </ThemeProvider>
  );
};
