import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GetStarted = () => {
     return (
          <div className='flex flex-col md:flex-row '>
               <div className='relative hidden md:flex items-center justify-center p-8 aspect-[6/4] md:max-w-[460px] md:max-h-[460px] md:aspect-square w-full rounded-[30px] overflow-hidden'>
                    <Image src='/assets/get-started.webp' alt='get-started' width={460} height={460} className='object-cover absolute inset-0 w-fit h-fit' />
               </div>
               <div className='flex flex-col justify-center w-full rounded-[30px] bg-[#C0B395] py-8 px-6  lg:px-28 gap-4 md:gap-8'>
                    <p className='text-black text-xs tracking-[0.1em] uppercase font-spacemono'>Get started in minutes </p>
                    <h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl pb-[120px] md:pb-0'>Built to take your business further, faster.</h2>
                    <Link href='/contact'>
                         <button className='px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#F2FF66] hover:bg-[#F6FF94] group'>
                              <p className='text-black text-xs tracking-[0.1em] uppercase font-spacemono'>Start A Payment</p>
                              <div className="w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0 ">
                                   <Image src='/assets/icons/arrow_outward.svg' alt="arrow_outward" width={10} height={10} />
                              </div>
                         </button>
                    </Link>
               </div>
          </div>
     )
}

export default GetStarted