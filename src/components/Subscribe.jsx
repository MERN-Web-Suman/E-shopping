
import React from 'react'

 const BannerImg = {
  backgroundImage : `url(${"orange-pattern.jpg"})`,
  backgroundPosition : "center",
  backgroundRepeat :"no-repeat",
  backgroundSize:"cover",
  hight :"100%",
  width:"100%",

 };

export default function Subscribe() {
  return (

    <>
                <div style={BannerImg} className=' mb-20 bg-gray-100 text-black ' >

          <div className='container backdrop-blur-sm py-10' >

            <div className='space-y-6 max-w-xl mx-auto  '>

              <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-bold' >Get Notified About New Products</h1>

                  <div className='flex gap-8'>

                    <input type="text" placeholder='Enter your email.' className='w-full p-3' />

                    <button type='sumbit' className='bg-[#E73879] text-white py-3 px-3 rounded-lg hover:scale-110 duration-300  shadow-lg' >Sumbit</button>
                  </div>
            </div>
          </div>
          </div>

         
    </>
 
  )
}
