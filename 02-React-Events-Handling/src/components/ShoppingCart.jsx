import React, {useState} from 'react';
import { WatchService } from '../services/WatchService';


const ShoppingCart = () => {

    const [watchState, setWatchState] = useState(WatchService.getAllWatches());

    const updateQty = (e, watchId) => {
        const updatedWatches = watchState.map(watch => {
            if(watch.id === watchId){
                return {
                    ...watch,
                    qty : e.target.value > 0 ? e.target.value : 1
                }
            }
            else{
                return watch;
            }
        });
        setWatchState(updatedWatches);
    };

    const deleteWatch = (watchId) => {
        const remainingWatches =  watchState.filter(watch => watch.id !== watchId);
        setWatchState(remainingWatches);
    };

    const calculateTotal = () => {
        let total = 0;
        watchState.forEach(watch => {
            total += watch.price * watch.qty;
        });
        return total;
    };
   
    return (
        <>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                         {
                            watchState.length === 0 && <tr>
                                <td colSpan={7}>
                                    <p className="text-2xl text-center text-red-600">-------- Cart is Empty
                                        ------- </p>
                                </td>
                            </tr>
                         }
                                {
                                    watchState.map(watch => (
                                        <tr >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{watch.id}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900"></div>
                                                <div className="text-sm text-gray-500">{watch.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img className="h-16 w-16 object-cover" src={watch.imageUrl}
                                                    alt="Product 1"/>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input type="number" value={watch.qty} onChange={(e) => updateQty(e, watch.id)}
                                                    className="w-12 border-gray-300 rounded-md text-center"/>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{watch.price}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{watch.qty * watch.price}</div>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteWatch(watch.id)}
                                                        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </table>
                </div>


                    <div className="mt-6 flex justify-end">
                            <div className="text-xl font-semibold text-gray-900">Total: {calculateTotal()}</div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                                Proceed to Checkout
                            </button>
                        </div>


            </div>
        </>
    )
};
export default ShoppingCart;