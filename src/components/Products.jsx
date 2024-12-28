
import React from 'react'

export default function Products() {
  return (
    <div>
        <div className="container">
            {/* Header section */}
               <div className='text-center justify-center'>
                <h1>Our Products</h1>
                <p>Explore Our Products</p>
               </div>

               {/* Cards sections */}

               <div className='mb-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gpap-5 place-items-center'>
                     
                     <div className='group'>

                        <div className='relative'>
                            <img src="p-3.jpg" className='h-[180px] w-[260px] object-cover rounded-md ' />
                            
                                {/* hover button */}

                            <div className=' hidden group-hover:flex  absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 '>

                                <button className='py-2 px-4 rounded hover:scale-110  duration-300 bg-[red] text-white '>Add to Cart</button>
                                </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>Boat Headphone</h2>
                            <h2 className='font-bold'>$120 <span className='text-gray-500 line-through text-sm'>$250 ,</span> <span className='text-[#5CB338] text-sm'>83% off</span> </h2>
                        </div>

                        </div>

                        <div className='group'>

                        <div className='relative'>
                            <img src="p-4.jpg" className='h-[180px] w-[260px] object-cover rounded-md ' />
                            
                                {/* hover button */}

                            <div className=' hidden group-hover:flex  absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 '>

                                <button className='py-2 px-4 rounded hover:scale-110  duration-300 bg-[red] text-white '>Add to Cart</button>
                                </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>Rocky Mountain</h2>
                            <h2 className='font-bold'>$420 <span className='text-gray-500 line-through text-sm'>$310 ,</span>  <span className='text-[#5CB338] text-sm'>43% off</span> </h2>
                        </div>

                        </div>

                        <div className='group'>

                        <div className='relative'>
                            <img src="p-5.jpg" className='h-[180px] w-[260px] object-cover rounded-md ' />
                            
                                {/* hover button */}

                            <div className=' hidden group-hover:flex   absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>

                                <button className='py-2 px-4 rounded hover:scale-110  duration-300 bg-[red] text-white '>Add to Cart</button>
                                </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>Goggles</h2>
                            <h2 className='font-bold'>$150 <span className='text-gray-500 line-through text-sm'>@199 ,</span> <span className='text-[#5CB338] text-sm'>65% off</span> </h2>
                        </div>

                        </div>


                        <div className='group'>

                        <div className='relative'>
                            <img src="p-7.jpg" className='h-[180px] w-[260px] object-cover rounded-md ' />
                            
                                {/* hover button */}

                            <div className='  hidden group-hover:flex  absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 '>

                                <button className='py-2 px-4 rounded hover:scale-110  duration-300 bg-[red] text-white '>Add to Cart</button>
                                </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>Printed</h2>
                            <h2 className='font-bold'>$120 <span className='text-sm text-gray-500 line-through'>$199 ,</span> <span className='text-[#5CB338] text-sm'>53% off</span> </h2>
                        </div>

                        </div>
                    
                </div>
               </div>
        </div>
    </div>
  )
}
