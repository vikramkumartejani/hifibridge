import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MobileHeader = () => {
     return (
          <div className='w-full pt-3 pb-3 z-[99999] bg-white px-0 relative block lg:hidden'>
               <div className='flex items-center justify-between w-full'>
                    <div className='flex justify-start w-full'>
                         <Link href='https://dashboard.hifibridge.com/signin'>
                              <button className='px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#eceae5] group'>
                                   <p className='text-black text-xs tracking-[0.1em] uppercase font-spacemono'>Login</p>
                              </button>
                         </Link>
                    </div>
                    <div className='relative z-10 flex justify-center w-full'>
                         <Link href='/'>
                              <Image src='/assets/logo.svg' alt='logo' width={50} height={20} />
                         </Link>
                    </div>
                    <div className='flex justify-end w-full'>
                         <button className='z-10 flex items-center justify-center w-12 h-12 transition-transform cursor-pointer'>
                              <div className="relative flex flex-col w-8 gap-[4px]">
                                   <span
                                        className="w-full absolute h-[1px] z-10 bg-black"
                                        style={{
                                             left: "50%",
                                             top: "-4px",
                                             willChange: "transform",
                                             transform: "translateX(-50%) translateY(-50%)",
                                        }}
                                   ></span>
                                   <span
                                        className="w-full absolute h-[1px] z-10 bg-black"
                                        style={{
                                             left: "50%",
                                             top: "0px",
                                             willChange: "transform",
                                             transform: "translateX(-50%) translateY(-50%)",
                                             opacity: 1,
                                        }}
                                   ></span>
                                   <span
                                        className="w-full absolute h-[1px] z-10 bg-black"
                                        style={{
                                             left: "50%",
                                             bottom: "-4px",
                                             opacity: 1,
                                             willChange: "transform",
                                             transform: "translateX(-50%) translateY(50%)",
                                        }}
                                   ></span>
                                   <span
                                        className="w-full absolute h-[1px] z-10 bg-black"
                                        style={{
                                             left: "50%",
                                             bottom: "-8px",
                                             willChange: "transform",
                                             transform: "translateX(-50%) translateY(50%)",
                                        }}
                                   ></span>
                              </div>
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default MobileHeader