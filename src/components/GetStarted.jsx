import React from 'react'
import { arrowUp } from '../assets'
import styles from '../styles'

function GetStarted() {
  return (
    <div  
        className={`${styles.flexCenter} rounded-full bg-blue-gradient 
        w-[140px] h-[140px] p-[2px] `}>
        
        <div className={`${styles.flexCenter} flex-col rounded-full bg-primary w-[100%] h-[100%] `}>
            <div className={`${styles.flexStart} flex-row `}>
                <p className=' font-poppins font-medium text-[18px] leading-[27px] mr-2 text-white'> 
                    <span className=' text-gradient'>Get</span> 
                </p>
                <img src={arrowUp} alt='arrow' />
            </div>

            <p className=' font-poppins font-medium text-[18px] leading-[27px] text-white'> 
                    <span className=' text-gradient'>Started</span>
                    
                    
                </p>
        </div>

    </div>
  )
}

export default GetStarted