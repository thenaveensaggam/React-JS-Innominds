import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const incrementBy = (val) => {
        setCount(count + val);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const decrementBy = (val) => {
        setCount(count - val);
    };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 text-center">
  
  <h2 id="count" className="text-4xl font-bold text-gray-800">{count}</h2>

 
  <div className="flex justify-center gap-4 mt-6">
    <button 
      onClick={decrement}
      className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600">
      Decrement
    </button>
    <button 
      onClick={() => decrementBy(5)}
      className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600">
      DecrementBy
    </button>
    <button 
      onClick={increment}
      className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600">
      Incerment
    </button>
    <button 
      onClick={() => incrementBy(5)}
      className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600">
      IncermentBy
    </button>
  </div>
</div>
  )
}

export default Counter