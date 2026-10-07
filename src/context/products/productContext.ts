import { createContext } from "react";
import { useContextGuard } from "../useContextGuard";
import type { ProductContextValue } from "../../types/product";



export const ProductContext = createContext<ProductContextValue | null>(null)

export const useProduct = () => {
    return useContextGuard(ProductContext, "use Product hook")
}