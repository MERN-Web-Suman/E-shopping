
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";

 const BannerImg = {
    backgroundImage: `url(${"footer-pattern.jpg"})`,
    backgroundPosition:"bottom",
    backgroundRepeat :"no-reoeat",
    backgroundSize:"cover",
    height:"100%",
    width :"100%",
 };
       

 


// 
// 


export default function Footer() {
  return (
    <div className='text-white mb-20 ' style={BannerImg} >

        <div className='container' >

            <div className='grid md:grid-cols-3 pb-44 pt-5' >
                {/* company details */}

                <div className='py-8 px-4' >

                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify flex mb-3 items-center gap-3'> <img src="logo.png" alt="" className='max-w-[50px]' />   Shopsy</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Et, quasi nulla? Dolorum provident adipisci possimus
                          assumenda, aliquam minus quis sapiente.
                    </p>
                </div>

                {/* footer links */}

                <div className='grid grid-cols2 sm:grid-cols-3 col-span-2 md:pl-10' >

                    <div>
                        <div className='py-8 px-4' >

                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                 
                                <ul className='flex flex-col gap-3' >

                                    <li className='cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300  hover:underline' >

                                        <span>HOME</span>
                                    </li>

                                    <li className='cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300  hover:underline'>
                                        <span>ABOUT</span>
                                    </li>
                                    
                                    <li className='cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300  hover:underline'>
                                        <span>CONTACTS</span>
                                    </li>

                                    <li className='cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300  hover:underline'>
                                        <span>BLOG</span>
                                    </li>
                                </ul>
                             
                        </div>
                    </div>
                                    
                    <div>
                        <div className='py-8 px-4' >

                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                 
                                <ul className='flex flex-col gap-3' >

                                    <li className='cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300  hover:underline' >

                                        <span>HOME</span>
                                    </li>

                                    <li className='cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300  hover:underline'>
                                        <span>ABOUT</span>
                                    </li>
                                    
                                    <li className='cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300  hover:underline'>
                                        <span>CONTACTS</span>
                                    </li>

                                    <li className='cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300  hover:underline'>
                                        <span>BLOG</span>
                                    </li>
                                </ul>
                             
                        </div>
                    </div>

                            {/* social linlks */}
                              
                              <div>

                                <div className='flex items-center gap-3 mt-6'>

                                    <span className='text-3xl'>  <FaInstagram />  </span>
                                      
                                    <span className='text-3xl'>  <FaLinkedinIn /> </span>

                                    <span className='text-3xl'>  <FaFacebookF />  </span>
                                </div>

                                <div className='mt-6' >

                                    <div className='flex items-center gap-3' >

                                    <FaLocationArrow />
                                    <p>Patna, Bihar</p>

                                    </div>
                                    <div className='flex items-center gap-3 mt-3' >

                                    <FaMobileRetro />
                                        <p>91+ 999999999</p>

                                    </div>
                                                                        
                                </div>
                              </div>
                </div>

            </div>
        </div>
    </div>
  )
}
