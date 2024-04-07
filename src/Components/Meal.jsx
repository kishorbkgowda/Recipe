import React, { useState } from "react";
import { mealData } from "../data/data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
function Meal() {
  const [food,setfood] = useState(mealData);
  const filtercat = (category)=>
  {
    setfood(
      mealData.filter((item)=>
    {
      return item.category === category;
    })
    )
  }
  
  return (
    <div className="max-w-[1520px] m-auto px-4">
      <h1 className="text-orange-600 font-bold text-3xl text-center py-4">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center p-2">
          <button onClick={()=>setfood(mealData)} className="m-1 border-2  border-orange-700 text-orange  hover:bg-orange-700 hover:text-white hover:border-orange-700 transition-all duration-500">
            All
          </button>
          <button onClick={()=>filtercat("pizza")} className="m-1 border-2 border-orange-700 text-orange hover:bg-orange-700 hover:text-white hover:border-orange-700 transition-all duration-500">
            Pizza
          </button>
          <button onClick={()=>filtercat("chicken")} className="m-1 border-2 border-orange-700 text-orange hover:bg-orange-700 hover:text-white hover:border-orange-700 transition-all duration-500">
            Chicken
          </button>
          <button onClick={()=>filtercat("salad")} className="m-1 border-2 border-orange-700 text-orange hover:bg-orange-700 hover:text-white hover:border-orange-700 transition-all duration-500">
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-3">
        {food.map((item) => {
          return (
            <div
              key={item.id}
              className="border-none hover:scale-105 duration-300"
            >
              <img
                className="w-full h-[170px] object-cover rounded-lg"
                src={item.image}
              />
              <div className="flex justify-between py-2 pl-2">
                <p className="font-bold">{item.name}</p>
                <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-3 px-2 border-8">
                  {item.price}
                </p>
              </div>
              <div className="pb-2">
                <p className=" flex items-center pl-2 -mt-2 text-indigo-600">
                  View More <ArrowSmRightIcon className="w-5 ml-1 text-center mt-1" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meal;
