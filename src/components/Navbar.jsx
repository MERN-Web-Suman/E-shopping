
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from './Darkmode';

    // lower navbar data

    const Menu = [
        {
            id :1,
            name : "Home",
            link : "/#",
        },

        {
            id :2,
            name :"Top Reted",
            link :"Services",
        },

        {
            id:3,
            name :"Kids wear",
            link : "/#",
        },

        {
            id:4,
            name :"Mens Wear",
            link:"/#",
        },
        {
           id :5,
           name :"Electronices",
           link :"/#",
        },

        {
            id:6,
            name:"Fashion",
            link:"/#",
        },
        {
            id:7,
            name :"Grocery",
            link :"/#",
        },
        {
            id :8,
            name :"Baby Toys",
            link :"/#",
        },
    ];

export default function Navbar() {
  return (

    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ' >
        {/* upper navbar */}

        <div className='bg-primary/40 py-3 ' >

            <div className='container flex justify-between items-center ' >

                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2 no-underline  ' >
                        
                        <img src="logo.png" alt="" className='w-10' />
                        Shopsy
                    </a>
                </div>
                
                {/* search bar  */}

                <div className='flex justify-between items-center gap-4 ' >

                    <div className=' relative hidden  sm:flex group' >
                        <input type="text"

                        placeholder='search '
                        className='w-[200px] sm:w-[200px] hover:bg-gray-900 hover:text-white group-hover:w-[300px] transition-all duration-300 rounded-full border  px-2 py-1 focus:outline-none focus:border-1 border-primary '

                                             />
                            <CiSearch  className='text-gray-500 text-bold  group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 ' />
                    </div>

                         {/* order button */}
                 
                 <button 

                    className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'

                    onClick={()=>
                        alert("Ordering not available yet") }
                    
                    >
                    <span className='group-hover:block hidden transition-all duration-200 ' >Order</span>
                    
                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer ' />
                    </button>

                    {/* DarkMode button */}
                          <div>
                          <Darkmode></Darkmode>
                          </div>
                      

                </div>
            
                 
            </div>
        </div>

        {/* Lower Navbar */}

        <div className='flex justify-center bg-[#ECEBDE]  ' >

            <ul className='sm:flex hidden items-center gap-8   ' >
                {
                    Menu.map((data)=>(

                        <li key={data.id} >
                            <a href={data.link} className='no-underline  inline-block hover:text-primary duration-300 border-[green] hover:border-b-2  ' >{data.name} </a>
                        </li>
                    ))
                }
            </ul>
        </div>


    </div>
  )
}
