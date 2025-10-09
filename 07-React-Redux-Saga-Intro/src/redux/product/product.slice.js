import { createSlice } from "@reduxjs/toolkit";

export const productFeatureKey = "productKey";

const initialState = {
  product: {
    id: 12,
    name: "Smart Watch",
    imageUrl: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
    qty: 1,
    price: 12000,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    incrementQtyAction: (state, action) => {
      state.product.qty = state.product.qty + 1;
    },
    decrementQtyAction: (state, action) => {
      state.product.qty = state.product.qty - 1 > 0 ? state.product.qty - 1 : 1;
    },
  },
});

export const { incrementQtyAction, decrementQtyAction } = productSlice.actions;
export default productSlice;
