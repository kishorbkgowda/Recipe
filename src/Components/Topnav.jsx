import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag,AiFillProfile} from 'react-icons/ai'
import {BsFillCartFill,BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from "react-icons/tb"
import {FaGoogleWallet} from 'react-icons/fa'
import {MdHeadsetMic, MdFavorite} from 'react-icons/md'

function Topnav() {
    const [nav,setnav] = useState(false);
    const lol = [{name:"My Account",icon:BsPerson},{name:"Delivery",icon:TbTruckReturn},{name:"Favourites",icon:MdFavorite},{name:"Wallet",icon:FaGoogleWallet},{name:"Help",icon:MdHeadsetMic}];
  return (
    <div className='max-w-[1520] mx-auto flex justify-between items-center p-4 relative'>
        <div className={nav ?'fixed left-0 top-0 z-50 lg:w-72 h-screen flex flex-col p-2 items-start bg-slate-50 gap-2 transition-all duration-700 ease-in-out':'absolute left-[-50%]'}>
            <div className='flex lg:text-[1.5rem] items-center justify-between p-3 w-full font-bold'><h2>YUM<span className='text-orange-700'>Eats</span></h2><AiOutlineClose className='cursor-pointer' size={20} onClick={()=>setnav(!nav)}/></div>
            {
                lol.map((hell,index)=>
                {
                    return(
                        <div key={index} className='flex lg:text-xl items-center gap-3 p-3 font-bold'><hell.icon size={20}/><h2>{hell.name}</h2></div>
                    )
                })
            }
        </div>
        <div className='flex items-center'>
            <div className='cursor-pointer p-2 fixed mt-[0.3rem]' onClick={()=>setnav(!nav)}>
                 <AiOutlineMenu size={25}/>  
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 ml-9'>Yum
            <span className='font-bold'>Eats</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-orange-700 text-white rounded-full p-2 font-bold'>Free</p>
            <p className='p-2 font-bold'>Delivery</p>
            </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='search-meals'/>
        </div>
        <button className='bg-orange-700 text-white hidden md:flex gap-2 items-center py-2 rounded-full'>
           <BsFillCartFill size={20}/>Cart
        </button>
    </div>
  )
}

export default Topnav