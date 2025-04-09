"use client"
import { useState, memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuButton } from "./MenuButton"

const MobileHeader = () => {
     const [menuOpen, setMenuOpen] = useState(false)

     const handleMenuToggle = () => {
          setMenuOpen((prevState) => !prevState)
     }

     return (
          <>
               <div className={`w-full pt-3 pb-3 z-[99999] bg-white block lg:hidden ${menuOpen ? "fixed top-0 left-0 right-0 px-4" : "relative"}`}>
                    <div className="flex items-center justify-between w-full">
                         <Link href="https://dashboard.hifibridge.com/signin">
                              <button className="px-3 py-[9px] rounded-lg text-xs font-spacemono bg-[#eceae5] text-black tracking-[0.1em] uppercase">LOGIN</button>
                         </Link>

                         <Link href="/">
                              <Image src="/assets/logo.svg" alt="logo" width={50} height={20} />
                         </Link>

                         <MenuButton isOpen={menuOpen} onClick={handleMenuToggle} />
                    </div>
               </div>

               {menuOpen && <MobileMenuOverlay onClose={handleMenuToggle} />}
          </>
     )
}

const MobileMenuOverlay = memo(() => {
     return (
          <div className="fixed inset-0 top-[57px] bg-white z-[9999] px-4 flex flex-col justify-between">
               {/* Menu Items */}
               <div className="z-10 flex flex-col justify-between w-full h-screen py-10 transform bg-white">
                    <div className="flex flex-col w-full">
                         <div className="bg-[#fff] border-t-[1px] border-[#eceae5] last:border-b-[1px] py-4">
                              <button className="flex items-center w-full gap-3 text-left text-gray-800 transition-colors duration-200 hover:bg-gray-50">
                                   <p className="text-black text-xl md:text-2xl ">Platform</p>
                                   <div className="w-[10px] h-[10px] transition-transform duration-300 transform -rotate-0">
                                        <Image src='/assets/icons/arrow_downward.svg' alt="arrow" width={10} height={10} className=" absolute w-full h-full inset-0" />
                                   </div>
                              </button>
                         </div>
                         <div className="bg-[#fff] border-t-[1px] border-[#eceae5] last:border-b-[1px] py-4">
                              <button className="flex items-center w-full gap-3 text-left text-gray-800 transition-colors duration-200 hover:bg-gray-50">
                                   <p className="text-black text-xl md:text-2xl">Company</p>
                              </button>
                         </div>
                         <div className="bg-[#fff] border-t-[1px] border-[#eceae5] last:border-b-[1px] py-4">
                              <button className="flex items-center w-full gap-3 text-left text-gray-800 transition-colors duration-200 hover:bg-gray-50">
                                   <p className="text-black text-xl md:text-2xl">Documentation</p>
                                   <div className="w-[10px] h-[10px] transition-transform duration-300 transform -rotate-0">
                                        <Image src='/assets/icons/arrow_downward.svg' alt="arrow" width={10} height={10} className=" absolute w-full h-full inset-0" />
                                   </div>
                              </button>
                         </div>
                    </div>
               </div>

               <Link href="/contact" className="w-full">
                    <button className="px-3 pb-5 pt-5 rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] w-full mb-20 h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-[#F2FF66] hover:bg-[#F6FF94] group">
                         <p className="text-black text-xs tracking-[0.1em] uppercase font-spacemono">
                              Start Now
                         </p>
                         <div className="w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0">
                              <Image
                                   src="/assets/icons/arrow_outward.svg"
                                   alt="arrow_outward"
                                   width={10}
                                   height={10}
                              />
                         </div>
                    </button>
               </Link>
          </div>
     )
})

MobileMenuOverlay.displayName = "MobileMenuOverlay"

export default MobileHeader
