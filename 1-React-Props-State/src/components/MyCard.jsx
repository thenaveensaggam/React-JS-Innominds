import React from 'react'

const MyCard = ({title, subTitle}) => {
   
  return (
    <div className='mt-3'>
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-500 mt-2">{subTitle}</p>
        </div>

    </div>
  )
}

export default MyCard