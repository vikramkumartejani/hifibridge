import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
     return (
          <div className='grid items-center w-full h-full gap-0 md:min-h-[calc(100vh-164px)] max-h-full md:max-h-[960px] grid-cols-1 md:grid-cols-7'>
               <div className='flex flex-col h-full justify-center w-full rounded-[30px] bg-[#eceae5] py-8 px-5 lg:py-32 lg:px-28 gap-4 md:gap-8 col-span-4 order-2 md:order-1'>
                    <div className="flex items-center gap-2">
                         <div className="relative flex items-center justify-center flex-none transition-all duration-300 bg-white rounded-md w-7 h-7 group-hover:bg-lemon">
                              <div className="w-4 h-4">
                                   <Image src='/assets/icons/platform-overview.svg' alt="virtual-account" width={16} height={16} />
                              </div>
                         </div>
                         <p className="text-black text-xs tracking-[0.1em] uppercase font-spacemono">Platform Overview</p>
                    </div>
                    <h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl '>Stablecoin infrastructure to build the next era of your business</h2>
                    <p className='text-black text-sm font-spacemono'>HIFI powers a suite of stablecoin API's for the next-generation of companies to build hundreds of money movement flows.</p>
                    <Link href='/contact'>
                         <button className="px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#F2FF66] hover:bg-[#F6FF94] group">
                              <p className="text-black text-xs tracking-[0.1em] uppercase font-spacemono">Start A Payment</p>
                              <div className="w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0 ">
                                   <Image src='/assets/icons/arrow_outward.svg' alt="arrow_outward" width={10} height={10} />
                              </div>
                         </button>
                    </Link>
               </div>
               <div className='relative bg-[#C0B395] aspect-square order-1 md:order-2 md:h-full md:aspect-auto w-full flex items-center justify-center col-span-3 rounded-[30px] overflow-hidden'>
                    <div className='max-w-[150px] w-full md:max-w-[240px] h-full relative'>
                         <Image src='/assets/platformoverview-header.webp' alt='platformoverview-header' width={1500} height={1500} className='z-20 object-contain absolute inset-0 w-full h-full top-0 bottom-0 left-0 right-0' />
                    </div>

                    <video src='/assets/city.mp4' loop muted playsInline autoPlay className='absolute top-0 left-0 z-10 object-cover w-full h-full'>
                         <source src='/assets/city.mp4' type="video/mp4" />
                         <source src='/assets/city.webm' type="video/webm" />
                    </video>
               </div>

          </div>
     )
}

export default Hero