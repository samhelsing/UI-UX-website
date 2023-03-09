import React, { useState } from 'react'
import styles from '../styles'
import {logo, close, menu} from '../assets'
import { navLinks} from '../constants'
export default function Navbar() {
    const [togggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar '>
        <img src={logo} alt='logo' className="w-[128px] h-[32px] " />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
           {navLinks.map((nav, index)=>{
            return <li key={nav.id} 
                        className={`font-poppins text-white font-normal text-[16px] 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>

                        <a href={`#${nav.id}`}>
                             {nav.title}
                        </a>
                     </li>
           })}
        </ul>

        <div className='sm:hidden flex justify-end items-center'>
           <img 
                src={togggle ? close : menu} alt='menu'
                className='w-[32px] h-[32] object-contain'
                onClick={()=> setToggle((prev)=> !prev)}
                />
            <div 
            className={`${togggle ? 'flex' : 'hidden'} bg-black-gradient justify-center absolute top-20 right-0 my-2 mx-4 min-w-[144px] rounded-xl
            
            `}>
             <ul className='list-none  justify-end items-center'>
           {navLinks.map((nav, index)=>{
            return <li key={nav.id} 
                        className={`font-poppins text-white font-normal text-[16px] 
                        ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>

                        <a href={`#${nav.id}`}>
                             {nav.title}
                        </a>
                     </li>
           })}
        </ul>       
        </div>

        </div>

        
        
    </nav>
  )
}
