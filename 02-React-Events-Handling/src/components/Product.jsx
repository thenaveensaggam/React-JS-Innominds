import React, { useState } from 'react'

const Product = () => {

   const [product, setProduct] = useState({
    id : "ASDFDASF",
    name : "Apple Watch",
    imageUrl : "https://m.media-amazon.com/images/I/61Kiq3ah+XL._UF1000,1000_QL80_.jpg",
    price : 1200,
    qty : 2
   }); 

   const incrementQty = () => {
    setProduct({
       ...product,
       qty : product.qty + 1
    })
   };

   const decrementQty = () => {
    setProduct({
       ...product,
       qty : product.qty - 1 > 0 ? product.qty - 1 : 0
    })
   };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
        <pre>{JSON.stringify(product)}</pre>
  <img 
    src={product.imageUrl} 
    alt="Product Image" 
    className=" h-48 "
  />

 
  <div className="p-5">
    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
    <p className="text-gray-500 text-sm mt-2">
      A short description of the product goes here. Clean and minimal style.
    </p>

    <div className="flex items-center justify-between mt-4">
      <span className="text-xl font-bold text-gray-900">${product.price}</span>
      <span className="text-xl font-bold">Qty : {product.qty}</span>
      <button onClick={decrementQty} className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
        -
      </button>
      <button onClick={incrementQty} className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
        +
      </button>
    </div>
  </div>
</div>

  )
}

export default Product