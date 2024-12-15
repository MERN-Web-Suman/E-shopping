



import React, { useEffect, useState } from 'react'

export default function DarkMode() {
 
    const [theme,setTheme] = useState(localStorage.getItem ("theme") || "light" );

    useEffect (() =>{

        if(theme == "dark"){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },  [theme] );

  return (
    <div className='relative  ' >

    <img src="light-mode-button.png"  onClick={()=> setTheme(theme == "light" ? "dark" : "light") }

    className= {` w-12 cursor-pointer  drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10   ${theme=== "dark" ? "opacity-0" : "opacity-100" }` }  
    />


    <img src="dark-mode-button.png" onClick={()=> setTheme(theme == "light" ? "dark" : "light")}
     className='w-12 cursor-pointer
      drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ' />
</div>
  )
}

