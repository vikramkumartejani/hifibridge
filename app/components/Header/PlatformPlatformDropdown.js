'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'

const PlatformDropdown = () => {
     const [isOpen, setIsOpen] = useState(false)
     const dropdownRef = useRef(null)
     const closeTimeoutRef = useRef(null)

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false)
               }
          }

          document.addEventListener('mousedown', handleClickOutside)
          return () => {
               document.removeEventListener('mousedown', handleClickOutside)
               if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current)
               }
          }
     }, [])

     const handleMouseLeave = () => {
          closeTimeoutRef.current = setTimeout(() => {
               setIsOpen(false)
          }, 200)
     }

     const handleMouseEnter = () => {
          if (closeTimeoutRef.current) {
               clearTimeout(closeTimeoutRef.current)
          }
          setIsOpen(true)
     }

     return (
          <div
               className='relative'
               ref={dropdownRef}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
          >
               <button className="flex items-center gap-x-1" onClick={() => setIsOpen(!isOpen)} >
                    <p className="text-black text-sm font-spacemono">Platform</p>
                    <div className={`w-[10px] h-[10px] transition-transform duration-300 transform ${isOpen ? 'rotate-180' : '-rotate-0'}`}>
                         <Image
                              src="/assets/icons/arrow_downward.svg"
                              alt="Platform"
                              width={10}
                              height={10}
                         />
                    </div>
               </button>

               {isOpen && (
                    <div className="fixed top-[80px] left-1/2 -translate-x-1/2 z-50 bg-white border border-[#ECEAE5] shadow-lg rounded-lg p-4 w-[1024px] grid grid-cols-2 gap-6 animate-fade-in transition-all duration-200">
                         <div className="flex flex-col justify-between w-full px-3 py-5 md:max-w-lg">
                              <div className='hidden gap-2 md:flex md:flex-col'>
                                   <h3 className="text-black text-lg">Platform</h3>
                                   <p className="text-black text-[10px] leading-normal font-spacemono">Infrastructure to build stablecoin money movement experiences.</p>
                              </div>
                              <div className='flex flex-col gap-[26px] '>
                                   {[
                                        { href: '/platform-overview', label: 'Platform Overview' },
                                        { href: '/virtual-accounts', label: `Virtual Accounts` },
                                        { href: '/', label: 'Global Accounts' },
                                   ].map(({ href, label }, i) => (
                                        <Link
                                             key={i}
                                             href={href}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="relative flex items-center rounded-lg cursor-pointer group gap-x-4"
                                        >
                                             <div className='relative flex items-center justify-center flex-none w-5 h-5 mt-1 transition-all duration-300 rounded-md bg-[#ECEAE5] group-hover:bg-[#F6FF94]'>
                                                  <div className='relative w-4 h-4'>
                                                       <Image
                                                            alt={label}
                                                            src="/assets/icons/Nav-ArrowForward.svg"
                                                            width={16}
                                                            height={16}
                                                            className='absolute w-full h-full inset-0'
                                                       />
                                                  </div>
                                             </div>
                                             <p className="text-black text-sm font-spacemono">{label}</p>
                                        </Link>
                                   ))}
                              </div>
                         </div>

                         <div className="flex flex-col gap-3 w-full">
                              {[
                                   {
                                        href: '/platform-overview',
                                        img: '/assets/icons/Navigation-Our-Platform.webp',
                                        title: 'Our Platform',
                                        desc: 'Powerful APIs to build stablecoin products in your application'
                                   },
                                   {
                                        href: '/virtual-accounts',
                                        img: '/assets/icons/Navigation-Virtual-Accounts.webp',
                                        title: 'Virtual Accounts',
                                        desc: `Integrate virtual accounts to move between dollars and stablecoins`
                                   }
                              ].map(({ href, img, title, desc }, i) => (
                                   <Link
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group cursor-pointer grid grid-cols-5 gap-[18px] p-[14px] border-[1px] rounded-lg border-[#ECEAE5]"
                                   >
                                        <div className="relative aspect-[6/4] col-span-2 rounded-lg overflow-hidden">
                                             <Image src={img} alt={title} width={168} height={112} className="object-cover absolute w-full h-full inset-0" />
                                        </div>
                                        <div className="flex flex-col col-span-3 gap-2">
                                             <div className="flex items-center justify-between w-full gap-x-2">
                                                  <h3 className="text-black text-lg">{title}</h3>
                                                  <div className="relative flex items-center justify-center flex-none w-5 h-5 mt-1 transition-all duration-300 rounded-md bg-[#ECEAE5] group-hover:bg-[#F6FF94]">
                                                       <div className='relative w-4 h-4'>
                                                            <Image
                                                                 src="/assets/icons/Nav-ArrowForward.svg"
                                                                 alt="Arrow"
                                                                 width={16}
                                                                 height={16}
                                                                 className='absolute inset-0 w-full h-full'
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                             <p className="text-black text-[10px] leading-normal font-spacemono">{desc}</p>
                                        </div>
                                   </Link>
                              ))}
                         </div>
                    </div>
               )}
          </div>
     )
}

export default PlatformDropdown