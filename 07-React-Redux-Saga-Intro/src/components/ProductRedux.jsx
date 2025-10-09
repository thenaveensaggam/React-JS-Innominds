import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQtyAction,
  incrementQtyAction,
  productFeatureKey,
} from "../redux/product/product.slice";

const ProductRedux = () => {
  const dispatch = useDispatch();
  // get data from Redux
  const productState = useSelector((state) => state[productFeatureKey]);

  const { product } = productState;

  const incrementQty = () => {
    dispatch({
      type: `${incrementQtyAction}`,
    });
  };

  const decrementQty = () => {
    dispatch({
      type: `${decrementQtyAction}`,
    });
  };

  return (
    <>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <img
          src={product.imageUrl}
          alt="Product Image"
          className="w-full h-48 object-fit"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            This is a short description of the product. It highlights the key
            features and benefits.
          </p>
          <pre>Qty : {product.qty}</pre>
          <pre>Price : {product.price}</pre>
        </div>

        <div className="flex justify-between px-4 py-3 bg-gray-100">
          <button
            onClick={incrementQty}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Increment
          </button>
          <button
            onClick={decrementQty}
            className="px-4 py-2 bg-orange-300 text-white rounded-md hover:bg-orange-400 transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductRedux;
