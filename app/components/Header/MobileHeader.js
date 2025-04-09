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
          <div className="fixed inset-0 top-[57px] bg-white z-[9999] px-6 flex flex-col justify-between">
               {/* Menu Items */}
               <div className="flex flex-col gap-6 pt-10">
                    <div className="border-b pb-2">
                         <p className="text-lg font-medium">Platform ↓</p>
                    </div>
                    <div className="border-b pb-2">
                         <Link href="/company" className="text-lg font-medium">
                              Company
                         </Link>
                    </div>
                    <div className="border-b pb-2">
                         <p className="text-lg font-medium">Documentation ↓</p>
                    </div>
               </div>

               <div className="flex flex-col gap-4 mb-10">
                    <Link href="/contact">
                         <button className="w-full bg-[#F2FF66] hover:bg-[#F6FF94] text-black text-xs font-spacemono py-3 rounded-lg uppercase flex items-center justify-center gap-2">
                              Start Now →
                         </button>
                    </Link>
               </div>
          </div>
     )
})

MobileMenuOverlay.displayName = "MobileMenuOverlay"

export default MobileHeader
