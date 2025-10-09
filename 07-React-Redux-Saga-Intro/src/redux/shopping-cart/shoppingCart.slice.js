import { createSlice } from "@reduxjs/toolkit";
import { ProductService } from "../../services/ProductService";

export const shoppingFeatureKey = "shoppingKey";

const initialState = {
  products: ProductService.getProducts(),
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    incrementShoppingQtyAction: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        } else {
          return product;
        }
      });
    },
    decrementShoppingQtyAction: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            qty: product.qty - 1 > 0 ? product.qty - 1 : 1,
          };
        } else {
          return product;
        }
      });
    },
    deleteProductAction: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
    },
  },
});

export const {
  incrementShoppingQtyAction,
  decrementShoppingQtyAction,
  deleteProductAction,
} = shoppingCartSlice.actions;
export default shoppingCartSlice;
