import React from 'react'
import { discount, robot } from '../assets'
import styles from '../styles'
import GetStarted from './GetStarted'


export default function Hero() {
  return (
    <section id='home' className={` flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl-px-0 sm-px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient mb-2  rounded-[10px]'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'> 20%</span>
            DISCOUNT FOR { }
            <span className='text-white'> 1 MONTH</span>
            ACCOUNT

          </p>
        </div>

        <div className='flex flex-row items-center justify-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]
          text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>Genration</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-4'>
            <GetStarted />
          </div>
        </div>

        <h1
          className=' font-poppins font-semibold ss:text-[68px] text-[52px]
          text-white ss:leading-[100px] leading-[72px] w-full'>Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative ` }>
          <img src={robot} className='w-[100%] h-[100%] relative z-[5]' />
          

      </div>

        <div className={`ss:hidden ${styles.flexCenter}}`}>
          <GetStarted/>
        </div>

    </section>
  )
}
