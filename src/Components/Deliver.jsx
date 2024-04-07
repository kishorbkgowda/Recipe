import React from 'react'

function Deliver() {
  return (
    <div className='flex flex-col overflow-hidden max-w-[1240px] mx-auto my-12 p-4'>
        <h2 className='text-center text-xl md:text-3xl font-bold text-orange-500 p-3'>Quick Delivery App</h2>
        <div className='flex flex-wrap md:flex-nowrap justify-center items-center'>
          <div className='w-[300px] md:min-w-[550px] flex justify-center items-center'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" className=''/>
            </div>
          <div className='flex flex-col gap-3 p-3 justify-center items-center sm:items-start'>
              <h2 className='text-2xl text-cyan-500 font-bold'>Get the App</h2>
              <h2 className='text-2xl md:text-4xl font-bold text-center'>Limitless Convenience on-demand</h2>
              <p className='font-semibold text-[1rem] text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius est nisi repellat vero veritatis aspernatur rem. Minus earum cupiditate molestias eveniet nesciunt perspiciatis nostrum, similique aspernatur deleniti et illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam expedita magnam nostrum et nesciunt, saepe ducimus obcaecati, error laboriosam animi qui. Laborum iste voluptate et repudiandae, iusto tempora provident.</p>
              <button className='bg-orange-700 text-white rounded-md px-10 py-3 font-bold'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Deliver