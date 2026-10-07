import type { Dispatch } from "react";

export interface IProductItem {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    description: string;
    image: string;
    features: string[];
}
export interface ProductContextValue {
    state: IProductState
    dispatch: Dispatch<ActionType>
}
export interface IProductState {
    products: IProductItemType[]
    cart: IProductItemType[]
    category: string
    search: string
    sort: string
    favorite: string[]
    loading: boolean
    error: Error | null
}
export type ActionType = | { type: "GET_DATA", payload: IProductItemType[] } | { type: "SORT", payload: number } | { type: "SET_CATEGORY", payload: string } | { type: "SET_SORT", payload: string } | { type: "SET_SEARCH", payload: string } | { type: "TOGGLE_FAVORITE", payload: string }



export interface IProductItemType {
    id: string,
    product_category_id: string,
    name: string,
    price: number,
    image: string,
    description: string,
    manufacturer: string,
    created_at: Date,
    updated_at: Date,
    product_category: {
        id: string,
        name: string,
        created_at: Date,
        updated_at: Date
    }
}