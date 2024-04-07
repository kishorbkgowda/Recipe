import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

function Toppicks() {
  return (
    <>
      <h1 className="hidden sm:block text-orange-500 font-bold sm:text-3xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] mx-auto p-2 ">
        <Splide options = {{perPage:4,gap:"0.5rem",drag:"free",arrows:false}}>
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                  <p className="pt-2 px-4 text-xl font-bold">{item.title}</p>
                  <p className="px-4 pt-1 font-bold">{item.price}</p>
                  <button className="border-dotted border-white border-2 text-white mx-2 absolute bottom-4">
                    Add To Cart
                  </button>
                </div>
                <img
                  src={item.img}
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                />
              </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Toppicks;
