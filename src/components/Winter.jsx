
import React from 'react'
import { FaStar } from "react-icons/fa";

export default function Winter() {
  return (
             
    <div className='mt-14 mb-12' >

            <div className='container' >
            {/* Header section */}

            <div className='text-center mb-10 max-w-[600px] mx-auto ' >

                    <p  className='tex-sm text-[#fea928] ' >Best Quality Products</p>

                    <h1  className='text-3xl font-bold' >Top Selling Product For You</h1>

                    <p className='text-xs text-gray-600 ' >Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Aliquam debitis ipsam sit possimus,
                        eos quis pariatur impedit dolor magni harum.
                        </p>
            </div>
                    {/* Body section */}
                    
            <div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  place-items-center gap-5 ' >
                        
                        {/* Card section */}
                            
                    <div 
                    className='space-y-3' >

                    <img src="winter1.png" className='duration-300 hover:scale-110 hover:shadow-2xl h-[220px] w-[150px] object-cover rounded-md ' />
                            
                            <div>
                            <h3 className='font-semibold ' >printedT-shirt</h3>

                            <p className='text-sm text-gray-600 ' >yellow</p>

                            <div className='flex items-center gap-1 ' >
                                
                            <FaStar className='text-yellow-400' />
                            <span>4.4</span>
                            </div>
                            </div>
                        
                    </div>


                    <div 
                    className='space-y-3' >

                    <img src="winter2.jpg" className='duration-300 hover:scale-110 hover:shadow-2xl h-[220px] w-[150px] object-cover rounded-md ' />
                            
                            <div>
                            <h3 className='font-semibold ' >women westen</h3>

                            <p className='text-sm text-gray-600 ' >Red</p>

                            <div className='flex items-center gap-1 ' >
                                
                            <FaStar className='text-yellow-400' />
                            <span>4.2</span>
                            </div>
                            </div>
                        
                    </div>

                    <div 
                    className='space-y-3' >

                    <img src="winter3.png" className='duration-300 hover:scale-110 hover:shadow-2xl h-[220px] w-[150px] object-cover rounded-md ' />
                            
                            <div>
                            <h3 className='font-semibold ' >Goggles</h3>

                            <p className='text-sm text-gray-600 ' >Brown</p>

                            <div className='flex items-center gap-1 ' >
                                
                            <FaStar className='text-yellow-400' />
                            <span>4.7</span>
                            </div>
                            </div>
                        
                    </div>
                    
                    <div 
                    className='space-y-3' >

                    <img src="winter4.png" className=' hover:scale-110 hover:shadow-2xl h-[220px] w-[150px] duration-300 object-cover rounded-md ' />
                            
                            <div>
                            <h3 className='font-semibold ' >Fashion T-shirt</h3>

                            <p className='text-sm text-gray-600 ' >pink</p>

                            <div className='flex items-center gap-1 ' >
                                
                            <FaStar className='text-yellow-400' />
                            <span>4.5</span>
                            </div>
                            </div>
                        
                   </div>
                      </div>
            </div>
                            
                        {/* view all button */}
            <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500  hover:to-yellow-500 hover:from-red-500  text-white py-1 px-5 rounded-md hover:scale-110 hover:shadow-2xl duration-200 ">
                View All Products
            </button>
            </div>



            </div>
    </div>
)
}


