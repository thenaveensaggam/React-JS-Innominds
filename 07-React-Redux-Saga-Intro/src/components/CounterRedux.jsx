import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterFeatureKey,
  decrementAction,
  decrementByAction,
  incrementAction,
  incrementByAction,
} from "../redux/counter/counter.slice";

const CounterRedux = () => {
  const dispatch = useDispatch();
  // get data from redux store
  const counterState = useSelector((state) => state[counterFeatureKey]);

  const increment = () => {
    dispatch({ type: `${incrementAction}` });
  };

  const incrementBy = (value) => {
    dispatch({ type: `${incrementByAction}`, payload: { value: value } });
  };

  const decrement = () => {
    dispatch({ type: `${decrementAction}` });
  };

  const decrementBy = (value) => {
    dispatch({ type: `${decrementByAction}`, payload: { value: value } });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Counter : {counterState.count}
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={increment}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Decrement
            </button>
            <button
              onClick={() => incrementBy(5)}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Increment By
            </button>
            <button
              onClick={() => decrementBy(5)}
              className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
            >
              Decrement By
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CounterRedux;
