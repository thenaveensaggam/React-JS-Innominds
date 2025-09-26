
import React, { useEffect, useState } from 'react'
import { MealService } from '../services/MealService';
import LoadingSpinner from './LoadingSpinner';

const MealList = () => {

    const [searchText, setSearchText] = useState("");

 const [state, setState] = useState({
    loading : false,
    error : false,
    meals : [],
    filteredMeals : []
 });
   

 useEffect(() => {
    const getDataFromServer = async () => {
        try{
            setState({
                ...state,
                loading : true,
            });
            const response = await MealService.getMealsData("SeaFood");
            setState({
                ...state,
                loading : false,
                meals : response.data.meals,
                filteredMeals : response.data.meals,
            });
        }
        catch(error){
            setState({
                ...state,
                loading : false,
                error : error,
            });
        }
    }
    getDataFromServer();
 }, []);

 const {loading, error, meals, filteredMeals} = state;

 const sortAsc = () => {
    const sortedMeals = [...meals].sort((a, b) => a.strMeal.localeCompare(b.strMeal));
    setState({
        ...state,
        filteredMeals : sortedMeals
    });
 };

 const sortDesc = () => {
    const sortedMeals = [...meals].sort((a, b) => b.strMeal.localeCompare(a.strMeal));
    setState({
        ...state,
        filteredMeals : sortedMeals
    });
 };

 const filterData = (e) => {
    setSearchText(e.target.value);
    const filteredMealsList = [...meals].filter((meal) => {
        return meal.strMeal.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState({
        ...state,
        filteredMeals : filteredMealsList
    });
 };


  return (
    <>
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center">Waffers Restaurant</h1>
                <div className="flex flex-row items-center justify-center w-full my-3">
                    <input value={searchText} onChange={e => filterData(e)}  type="text"
                           className="border-2 border-gray-500 p-2 rounded-lg" placeholder="Search Here"/>
                    <button onClick={sortAsc}
                            className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 m-2">Sort A - Z
                    </button>
                    <button onClick={sortDesc}
                            className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 m-2">Sort Z - A
                    </button>
                </div>

                {
                    loading && <LoadingSpinner/>
                }

                {
                    !loading && !error && filteredMeals.length > 0 && 
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {
                     filteredMeals.map((meal, index) => {
                         return (
                             <div key={meal.idMeal}  className="bg-white shadow-md rounded-lg overflow-hidden">
                                     <img className="w-full h-48 object-cover" src={meal.strMealThumb}
                                          alt="Product Image"/>
                                     <div className="p-4">
                                         <h2 className="font-bold text-xl mb-2">{meal.strMeal}</h2>
                                         <p className="text-gray-600 mb-4">This is a short description of the
                                             product.</p>
                                         <div className="flex items-center justify-between">
                                             <span
                                                 className="text-lg font-semibold text-green-600">{meal.idMeal}</span>
                                             <button
                                                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add
                                                 to Cart
                                             </button>
                                         </div>
                                     </div>
                                 </div>
                         )
                     })
                    }
                 </div>
                }
            </div>
        </>
  )
}

export default MealList