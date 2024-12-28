
import React from 'react'
import { GrLocation } from "react-icons/gr";
import { FaMobileRetro } from "react-icons/fa6";

const FooterLinks = [

    {
        id:1,
        title :"Home",
        links:"/#"
    },

    {
        id:2,
        title :"About",
        links:"/#"
    },


    {
        id:3,
        title :"Contact",
        links:"/#"
    },

    {
        id:4,
        title :"Blog",
        links:"/#"
    },


];

export default function Footer() {
  return (
    <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5 '>
            {/* compant details section */}
            <div>
                <a href="#" className='text-red-500 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>E-shop</a>
                <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id modi aliquid totam, voluptate nulla esse.</p>
                <p className='text-gray-500 mt-4'>Made with 💕❤️ by The Coding Journey</p>
                <p>Thank you for 💕❤️ 🎂✨🎉 </p>
            </div>

              {/* Footer links */}

                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index)=>(
                                    <li key={index}>
                                        <a href={data.links} className='text-gray-600 no-underline hover:text-gray-600 duration-300' > {data.title} </a>
                                    </li>
                                ))
                            }
                        </ul>
                        </div>
                                      {/* Second col links */}

                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data,index)=>(
                                        <li key={index}>
                                            <a href={data.links} className='text-gray-600 no-underline hover:text-gray-600 duration-300' > {data.title} </a>
                                        </li>
                                    ))
                                }
                            </ul>
                            </div>

                            {/* Company Address */}

                          <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <div>
                                <div className='flex items-center gap-3'>
                                <GrLocation />
                                <p>Patna ,Bihar</p>
                                </div>
                                <div className='flex items-center gap-3 mt-6'>
                                <FaMobileRetro />
                                <p>91+ 1234566790</p>
                                </div>
                            </div>

                          </div>
            </div>
            

        
                   
           


        </div>

      
    </div>
  )
}
