import { useEffect, useReducer } from "react";
import type {
  ActionType,
  IProductItemType,
  IProductState,
} from "../../types/product";
import type { PropsChildren } from "../../types/theme";
import { ProductContext } from "./productContext";
import { fetchingData } from "../../data/products";

const initialProduct: IProductState = {
  products: [],
  cart: [],
  category: "All",
  search: "",
  sort: "",
  favorite: [],
  loading: false,
  error: null,
};

const reducer = (state: IProductState, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, products: payload };
    case "SET_SEARCH": {
      return { ...state, search: payload };
    }
    case "SET_CATEGORY": {
      return { ...state, category: payload };
    }
    case "SET_SORT": {
      return { ...state, sort: payload };
    }
    case "TOGGLE_FAVORITE": {
      return {
        ...state,
        favorite: state.favorite.includes(payload)
          ? state.favorite.filter((item) => item !== payload)
          : [...state.favorite, payload],
      };
    }
    default:
      return state;
  }
};

export const ProductProvider = ({ children }: PropsChildren) => {
  const [state, dispatch] = useReducer(reducer, initialProduct);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchingData<IProductItemType[]>(
          "https://jsonfakery.com/products/random/20",
        );
        dispatch({ type: "GET_DATA", payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
