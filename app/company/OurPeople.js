import Image from 'next/image'
import React from 'react'

const OurPeople = () => {
     return (
          <div className='grid w-full h-full grid-cols-1 md:grid-cols-3'>
               <div className='relative flex flex-col justify-between col-span-1 gap-8 px-2 py-8 overflow-hidden md:h-full md:px-8 md:py-10 rounded-3xl'>
                    <div className='flex flex-col gap-8'>
                         <p className='text-black text-xs tracking-[0.1em] uppercase z-30 max-w-lg font-spacemono'>Our People</p>
                         <h3 className='text-black text-2xl md:text-4xl z-30 max-w-lg'>A world class founding team</h3>
                         <p className='text-black text-sm z-30 font-spacemono'>The HiFi team comes together and brings decades of leadership experience in building world class products that connect the lives of billions of people from companies like Facebook, Uber, Apple, Citi Group, Coinbase, and Polygon. Our teams are comprised of people from diverse backgrounds and industries ranging from world class tech and finance organizations, startup founders, venture capitalists, and researchers. Our purpose comes from the love of building amazing products that ignite a new world of possibilities to improve the lives of people everyday.</p>
                    </div>
               </div>
               <div className='flex items-end justify-end w-full h-full col-span-2'>
                    <div className='grid w-full h-full max-w-3xl grid-cols-2 gap-[1px] md:grid-cols-3'>
                         <div className='group flex items-center justify-center h-full aspect-[8/4] md:aspect-auto outline-1 outline-[#eceae5] rounded-xl transition-colors duration-500 bg-transparent hover:bg-[#0F1632]'>
                              <Image
                                   src='/assets/icons/citi.svg'
                                   alt="Citi"
                                   width={150}
                                   height={0}
                                   className="transition-all duration-300 brightness-0 group-hover:brightness-100"
                                   style={{ color: 'transparent' }}
                                   loading="lazy"
                              />
                         </div>
                         <div className='group flex items-center justify-center h-full aspect-[8/4] md:aspect-auto outline outline-[#eceae5] rounded-xl transition-colors duration-500 bg-transparent hover:bg-[#6153F3]'>
                              <Image
                                   src='/assets/icons/polygon.svg'
                                   alt="Citi"
                                   width={150}
                                   height={0}
                                   className="transition-all duration-300 brightness-0 group-hover:brightness-100"
                                   style={{ color: 'transparent' }}
                                   loading="lazy"
                              />
                         </div>
                         <div className='group flex items-center justify-center h-full aspect-[8/4] md:aspect-auto outline outline-[#eceae5] rounded-xl transition-colors duration-500 bg-transparent hover:bg-[#191314]'>
                              <Image
                                   src='/assets/icons/apple.svg'
                                   alt="Citi"
                                   width={150}
                                   height={0}
                                   className="transition-all duration-300 brightness-0 group-hover:brightness-100"
                                   style={{ color: 'transparent' }}
                                   loading="lazy"
                              />
                         </div>
                         <div className='group flex items-center justify-center h-full aspect-[8/4] md:aspect-auto outline outline-[#eceae5] rounded-xl transition-colors duration-500 bg-transparent hover:bg-[#0052FE]'>
                              <Image
                                   src='/assets/icons/coinbase.svg'
                                   alt="Citi"
                                   width={150}
                                   height={0}
                                   className="transition-all duration-300 brightness-0 group-hover:brightness-100"
                                   style={{ color: 'transparent' }}
                                   loading="lazy"
                              />
                         </div>
                         <div className='group flex items-center justify-center h-full aspect-[8/4] md:aspect-auto outline outline-[#eceae5] rounded-xl transition-colors duration-500 bg-transparent hover:bg-[#191314]'>
                              <Image
                                   src='/assets/icons/uber.svg'
                                   alt="Citi"
                                   width={150}
                                   height={0}
                                   className="transition-all duration-300 brightness-0 group-hover:brightness-100"
                                   style={{ color: 'transparent' }}
                                   loading="lazy"
                              />
                         </div>
                         <div className='group flex items-center justify-center h-full aspect-[8/4] md:aspect-auto outline outline-[#eceae5] rounded-xl transition-colors duration-500 bg-transparent hover:bg-[#0063E0]'>
                              <Image
                                   src='/assets/icons/meta.svg'
                                   alt="Citi"
                                   width={150}
                                   height={0}
                                   className="transition-all duration-300 brightness-0 group-hover:brightness-100"
                                   style={{ color: 'transparent' }}
                                   loading="lazy"
                              />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default OurPeople