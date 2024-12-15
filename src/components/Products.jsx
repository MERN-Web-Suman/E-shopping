
import React from 'react'
import { FaStar } from "react-icons/fa";

export default function Products() {
  return (
    <div className='mt-14 mb-12' >

          <div className='container' >
            {/* Header section */}

            <div className='text-center mb-10 max-w-[600px] mx-auto ' >

                  <p  className='tex-sm text-[#fea928] ' >Top Selling Product For You</p>

                  <h1  className='text-3xl font-bold' >Product</h1>

                  <p className='text-xs text-gray-600 ' >Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Aliquam debitis ipsam sit possimus,
                      eos quis pariatur impedit dolor magni harum.
                      </p>
            </div>
                   {/* Body section */}
                   
                   <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  place-items-center gap-5 ' >
                        
                        {/* Card section */}
                            
                            <div 
                                  className='space-y-3' >

                                    <img src="women.png" className='h-[220px] w-[150px] object-cover rounded-md hover:scale-110 hover:shadow-2xl duration-300 ' />
                                          
                                          <div>
                                            <h3 className='font-semibold ' >Women Ethnic</h3>

                                            <p className='text-sm text-gray-600 ' >white</p>

                                            <div className='flex items-center gap-1 ' >
                                               
                                            <FaStar className='text-yellow-400' />
                                            <span>5.0</span>
                                            </div>
                                          </div>
                                       
                                  </div>

                                  <div 
                                  className='space-y-3' >

                                    <img src="women2.jpg" className='duration-300 hover:scale-110 hover:shadow-2xl h-[220px] w-[150px] object-cover rounded-md ' />
                                          
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

                                    <img src="women3.jpg" className='duration-300 hover:scale-110 hover:shadow-2xl h-[220px] w-[150px] object-cover rounded-md ' />
                                          
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

                                    <img src="women4.jpg" className='duration-300 hover:scale-110 hover:shadow-2xl h-[220px] w-[150px] object-cover rounded-md ' />
                                          
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

                                    <img src="women2.jpg" className=' hover:scale-110 hover:shadow-2xl h-[220px] w-[150px] duration-300 object-cover rounded-md ' />
                                          
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
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:scale-110 hover:shadow-2xl duration-200 ">
              View All Products
            </button>
          </div>



          </div>
    </div>
  )
}
