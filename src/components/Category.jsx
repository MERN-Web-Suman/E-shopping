
import React from 'react'

export default function Category() {
  return (
    <div className='py-8'>
        <div className='container' >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
                {/* first col */}
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px] '>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-[#FB4141]'>
                                 Browse
                            </button>
                        </div>
                    </div>
                    <img src="earphone.png" className='w-[320px] absolute bottom-0 '/>
                    
                </div>

                {/* Second section */}

                <div className='py-10 pl-5 bg-gradient-to-br from-[#fdc62e]/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px] '>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                            <button className='mt-2 cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-[#FB4141]'>
                                 Browse
                            </button>
                        </div>
                    </div>
                    <img src="watch.png" className='w-[220px] absolute top-0 -right-5 lg:top-[40px] '/>
                    
                </div>
                  {/* Third section */}
                  <div className=' col-span-2  py-10 pl-5 bg-gradient-to-br from-[#FF7F3E]/90 to-[#A294F9]/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white '>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px] '>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                            <button className=' mt-2 cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-[#FB4141]'>
                                 Browse
                            </button>
                        </div>
                    </div>
                    <img src="macbook.png" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0 '/>
                    
                </div>

            </div>
             
        </div>
    </div>
  )
}
