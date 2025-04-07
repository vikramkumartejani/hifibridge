import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
     return (
          <div className='grid items-center w-full min-h-[81vh] md:max-h-[960px] grid-cols-1 md:grid-cols-3'>
               <div className='relative flex flex-col items-center justify-center h-[80vh] md:h-full col-span-1 gap-4 overflow-hidden md:col-span-2 bg-[#ECEAE5] rounded-3xl'>
                    <div className='z-40 flex flex-col items-center justify-center gap-6 pb-20'>
                         <h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl z-10 max-w-sm text-center md:max-w-2xl'>Developer Infrastructure for Modern Money Movement</h2>
                         <Link href='/contact'>
                              <button className='px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#F2FF66] hover:bg-[#F6FF94] group'>
                                   <p className='text-black text-xs tracking-[0.1em] uppercase font-spacemono'>Sign Up with Sandbox</p>
                                   <div className="w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0 ">
                                        <Image src='/assets/icons/arrow_outward.svg' alt="arrow_outward" width={10} height={10} />
                                   </div>
                              </button>
                         </Link>
                    </div>
               </div>
               <div className=' col-span-1 flex flex-col overflow-hidden h-[85vh] md:h-full'>
                    <div className='relative flex flex-col justify-end order-2 gap-4 py-8 overflow-hidden bg-black md:order-1 rounded-3xl px-7' style={{height: "78%"}}>
                         <Image src='/assets/home-hero.webp' width={1000} height={1000} alt='hero' className='z-10 object-cover pointer-events-none absolute w-full h-full inset-0' />
                         <div className='absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#33171ECC] to-transparent to-30%'></div>
                         <h3 className='z-30 text-white text-8xl leading-8xl'>3.1</h3>
                         <p className='text-sm z-30 text-white font-spacemono'>Settle Payments in Seconds</p>
                    </div>
                    <div className='flex flex-col justify-center order-1 gap-4 py-6 md:order-2 bg-[#406354] rounded-3xl px-7'>
                         <div className='flex flex-col gap-4'>
                              <p className='text-sm max-w-2xl text-white font-spacemono'>HIFI is the next-generation payments and API platform for global businesses to move money at the speed of the internet.</p>
                              <button className='flex gap-2 items-center'>
                                   <p className='text-xs tracking-[0.1em] uppercase text-[#F2FF66] font-spacemono'>Learn More</p>
                                   <Image src='/assets/icons/ArrowDownGreen.svg' width={12} height={12} className='w-3 h-3 text-[#F2FF66] animate-bounce' alt='arrow' />
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Hero