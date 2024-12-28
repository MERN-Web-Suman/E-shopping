
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";

const MenuLinks = [
  {
    id :1,
    name:"Home",
    link : "/#",
  },

  {
    id:2,
    name :"Shop",
    link :"/#",
  },

  {
    id:3,
    name :"About",
    link :"/#",
  },

  {
    id :4,
    name :"Blogs",
    link :"/#",
  },
];

 const DropdownLink = [
  {
    id:1,
    name :"Trending products",
    links:"#/",
  },
  {
    id:2,
    name:"Best selling",
    links:"/#",
  },

  {
    id:3,
    name:"Top Rated",
    links :"/#"
  },
 ];

export default function Navbar() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white' >

          <div className='py-4'>
            <div className='container flex justify-between items-center' >
                {/* logo and links section */}

                <div className='flex  items-center gap-4' >
                    <span className='text-red-800 font-semibold tracking-widest text-2xl uppercase sm:text-3xl  ' >E-shop</span>
                    {/* Menu Items */}
                    <div className='hidden lg:block' >
                        <ul className='flex items-center gap-4'>
                          {
                            MenuLinks.map((data,index)=>(
                              <li key={index}>
                                <a href={data.link} className=' text-gray-500 hover:text-black duration-200 no-underline inline-block px-4 font-semibold' > {data.name} </a>
                              </li>
                            ))
                          }
                        </ul>
                    </div>
  
  
                </div>
                 {/* Navbar Right SECTION */}
                 <div className='flex justify-between items-center gap-4'>
                  {/* Search BAR section */}

                   <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Search' className='w-0 group-hover:w-[300px] transition-all duration-300 rounded-full group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none focus:border-1   '  /> 
                    <IoMdSearch className='text-xl text-gray-600 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-pretty ' />
                   </div>
                     {/* Order button section */}
                       
                       <button className='relative p-3'>
                       <FaCartShopping className='text-xl text-gray-600 ' />
                       <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                        4
                       </div>
                       </button>

                 </div>
            </div>
          </div>
     
    </div>
  )
}
