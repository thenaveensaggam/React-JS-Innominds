import React, { useState } from "react";
import { ProductService } from "../services/ProductService.js";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementShoppingQtyAction,
  deleteProductAction,
  incrementShoppingQtyAction,
  shoppingFeatureKey,
} from "../redux/shopping-cart/shoppingCart.slice.js";

const ShoppingCartRedux = () => {
  const dispatch = useDispatch();
  // get data from redux store
  const shoppingState = useSelector((state) => state[shoppingFeatureKey]);

  const { products } = shoppingState;

  const incrementQty = (productId) => {
    dispatch({
      type: `${incrementShoppingQtyAction}`,
      payload: { productId: productId },
    });
  };

  const decrementQty = (productId) => {
    dispatch({
      type: `${decrementShoppingQtyAction}`,
      payload: { productId: productId },
    });
  };

  const clickDelete = (productId) => {
    dispatch({
      type: `${deleteProductAction}`,
      payload: { productId: productId },
    });
  };

  const calculateGrandTotal = () => {
    /*let total = 0;
        for(let product of contacts){
            total += (product.qty * product.price);
        }
        return total;*/

    return products.reduce(
      (accu, currentValue) => accu + currentValue.qty * currentValue.price,
      0
    );
  };

  const displayProductsTable = () => {
    return (
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs uppercase bg-gray-50 text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr
                  key={product.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img
                      src={product.imageUrl}
                      alt="Product Image"
                      className="w-12 h-12 rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => decrementQty(product.id)}
                      className="bg-blue-500 mr-2 text-white px-3 py-1 text-sm rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                    >
                      -
                    </button>
                    {product.qty}
                    <button
                      onClick={() => incrementQty(product.id)}
                      className="bg-orange-500 ml-2 text-white px-3 py-1 text-sm rounded hover:bg-red-600 focus:ring-2 focus:ring-red-300"
                    >
                      +
                    </button>
                  </td>
                  <td className="px-6 py-4">{product.price * product.qty}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => clickDelete(product.id)}
                      className="bg-red-500 ml-2 text-white px-3 py-1 text-sm rounded hover:bg-red-600 focus:ring-2 focus:ring-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={4} className="px-6 py-4"></td>
              <td className="px-6 py-4">
                Grand Total : {calculateGrandTotal()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const displayNoProducts = () => {
    return (
      <div>
        <h3 className="text-red-400 p-5 text-xl">No Products Found!</h3>
      </div>
    );
  };
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">
          Products Table
        </h1>
        {products.length === 0 ? displayNoProducts() : displayProductsTable()}
      </div>
    </>
  );
};
export default ShoppingCartRedux;
