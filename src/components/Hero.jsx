
import React from 'react'
import Slider from "react-slick";

export default function Hero() {
  return (

    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center  ' >
        
                {/* background pattern */}

        <div className='h-[700px] w-[700px] bg-primary/60 absolute -top-1/2 right-0  md:right-24 rounded-3xl rotate-45 -z-9 ' >

        </div>
            
            {/* hero section */}

            

            <div className='container pb-8 sm:pb-0 ' >

                

                <div className='grid grid-cols-1 sm:grid-cols-2  ' >

                    {/* text content section */}

                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left   relative z-10 ' >

                        <h3 className='text-5xl sm:text-6xl lg:text-7xl font-bold ' >70% off on all Products Sale</h3>

                        <p className='text-sm'  >
                            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                        </p>
                        <div  >
                            <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500  hover:from-violet-500 hover:to-yellow-500  hover:scale-110 duration-300 text-white py-2 px-4 rounded-full' >
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* image section */}

                    <div className='order-1 sm:order-2' >

                        <div className='relative z-10' >
                            
                            <img src="women.png" className=' text-white w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto ' />
                        </div>
                    </div>
                </div>

            </div>

    </div>
  )
}
