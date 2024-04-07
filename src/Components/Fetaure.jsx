import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {RxDotFilled} from 'react-icons/rx'
function Fetaure() {
  const sliders=[
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [cur, setcur] = useState(0);

  const update = (ball) => {
    if (ball) cur === 3 ? setcur(0) : setcur(cur + 1);
    else cur === 0 ? setcur(sliders.length - 1) : setcur(cur - 1);
  };

  const dotted = (num)=>
  {
    setcur(num);
  }
  return (
    <div className="max-w-[1520px] h-[500px] w-full p-4 relative group">
      <AiOutlineArrowLeft
        size={35}
        className="hidden group-hover:block absolute z-10 left-8 top-1/2 bg-white p-2 rounded-full"
        onClick={() => update(true)}
      />
      <div
        className="w-full h-full rounded-xl bg-center bg-cover duration-1000"
        style={{ backgroundImage: `url(${sliders[cur].url})` }}
      >
        <AiOutlineArrowRight
          size={35}
          className="absolute z-10 right-8 top-1/2 bg-white p-2 rounded-full hidden group-hover:block"
          onClick={() => update(false)}
        />
      </div>
      <div className="flex justify-center py-2 my-2">
        {
          sliders.map((slide,index)=>
          {
            return(
            <div className="text-2xl cursor-pointer" key={index}>
              <RxDotFilled onClick={()=>dotted(index)}/>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Fetaure;
