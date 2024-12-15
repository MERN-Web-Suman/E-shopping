
import React from 'react'
import { FaStar } from "react-icons/fa";

export default function TopProduct() {
  return (
    <div>
        <div  className='container bg-gray-100 ' >

            {/* Header section */}

            <div className='text-left mb-10  ' >

                <p className='text-sm text-[#fea928] ' >Top Rated Products For You</p>

                <h1 className='text-3xl font-bold' >Best Products</h1>

                <p className='text-xs text-gray-700 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit
                    . Fugiat vero, aliquam sed distinctio laboriosam dignissimos molestiae? Architecto 
                    repellendus perferendis ducimus?</p>
            </div>

            {/* Body section */}
            
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-col-3 gap-20 md:gap-5 place-items-center py-14 ' >
                   
                   <div className= ' hover:bg-gray-700 rounded-2xl   relative shadow-xl duration-300 group max-w-[300px]' >

                    <div className='h-[100px]' >

                      <img src="shirt.png" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md ' />
                    </div>

                       <div className='p-4 text-center' >

                        <div className='w-full flex items-center justify-center gap-1' >
                                
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        </div>

                        <h1 className='text-xl font-bold group-hover:text-white duration-300 ' >Casual Wear</h1>

                        <p className='text-gray-700 group-hover:text-white duration-300 text-sm line-clamp-2 ' >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                         <button className='bg-[#fea928] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full   group-hover:text-[#fea928] ' >Order Now</button>

                       </div>
                   </div>
                              
                   <div className= ' hover:bg-gray-700 rounded-2xl   relative shadow-xl duration-300 group max-w-[300px]' >

                <div className='h-[100px]' >

                  <img src="shirt2.png" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md ' />
                </div>

                  <div className='p-4 text-center' >

                    <div className='w-full flex items-center justify-center gap-1' >
                            
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    </div>

                    <h1 className='text-xl font-bold group-hover:text-white duration-300 ' >Printed shirt</h1>

                    <p className='text-gray-700 group-hover:text-white duration-300 text-sm line-clamp-2 ' >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                    <button className='bg-[#fea928] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full   group-hover:text-[#fea928] ' >Order Now</button>

                  </div>
                </div>


                <div className= ' hover:bg-gray-700 rounded-2xl   relative shadow-xl duration-300 group max-w-[300px]' >

                <div className='h-[100px]' >

                  <img src="shirt3.png" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md ' />
                </div>

                  <div className='p-4 text-center' >

                    <div className='w-full flex items-center justify-center gap-1' >
                            
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    </div>

                    <h1 className='text-xl font-bold group-hover:text-white duration-300 ' >women shirt</h1>

                    <p className='text-gray-700 group-hover:text-white duration-300 text-sm line-clamp-2 ' >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                    <button className='bg-[#fea928] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full   group-hover:text-[#fea928] ' >Order Now</button>

                  </div>
                </div>

            </div>


        </div>
    </div>
  )
}
