
import React from 'react'
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { SlPaypal } from "react-icons/sl";

export default function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0' >

        <div className='container' >
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center' >

                {/* image section */}

                <div>
                    <img src="women2.jpg" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover ' />
                </div>

                {/* text details section */}

                <div className='flex flex-col justify-center gap-6 sm:pt-0' >

                  <h1 className='text-3xl sm:text-4xl font-bold' >Winter sale upto 50% Off </h1>

                  <p className='text-sm text-gray-900 tracking-wide leading-5' >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum sit 
                    quam distinctio non recusandae voluptates repellat omnis, nobis voluptatum.</p>

                    <div className='flex flex-col gap-4' >

                      <div className='flex items-center gap-4 ' >

                      <GrSecure className='text-4xl h-12 w-12  bg-violet-300 rounded-full  p-2' />
                      <p>Quality Product</p>
                      </div>

                      <div className='flex items-center gap-4' >

                      <TbTruckDelivery className='text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-orange-300' />
                            
                      <p>Fast Delivery</p>
                      </div>
                             
                             <div className='flex items-center gap-4' >

                             <SlPaypal className='text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-yellow-200' />
                             <p>Easy to Payment <span className='text-primary' >   (All Expected Payment here).  </span></p>
                             </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
