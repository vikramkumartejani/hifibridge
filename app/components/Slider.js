"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
     StablecoinsContent,
     DecentralizedLedgerContent,
     VirtualAccountsContent,
     InstantBankTransfersContent,
     slides,
} from "./Slider/SliderContent"

const SLIDE_INTERVAL = 4000

export default function Slider() {
     const [currentIndex, setCurrentIndex] = useState(0)
     const [progress, setProgress] = useState(0)
     const animationRef = useRef(null)
     const slideTimeoutRef = useRef(null)
     const lastTimeRef = useRef(0)
     const startTimeRef = useRef(0)

     const animate = (timestamp) => {
          if (!startTimeRef.current) {
               startTimeRef.current = timestamp
               lastTimeRef.current = timestamp
          }

          const elapsed = timestamp - startTimeRef.current
          const newProgress = Math.min(100, (elapsed / SLIDE_INTERVAL) * 100)

          setProgress(newProgress)

          if (newProgress < 100) {
               animationRef.current = requestAnimationFrame(animate)
          }
     }

     const startAnimation = () => {
          resetAnimation()

          startTimeRef.current = 0
          animationRef.current = requestAnimationFrame(animate)

          slideTimeoutRef.current = setTimeout(() => {
               handleNext()
          }, SLIDE_INTERVAL)
     }

     const resetAnimation = () => {
          if (animationRef.current) {
               cancelAnimationFrame(animationRef.current)
               animationRef.current = null
          }

          if (slideTimeoutRef.current) {
               clearTimeout(slideTimeoutRef.current)
               slideTimeoutRef.current = null
          }

          setProgress(0)
          startTimeRef.current = 0
     }

     useEffect(() => {
          startAnimation()

          return () => {
               resetAnimation()
          }
     }, [currentIndex])

     const handleNext = () => {
          setCurrentIndex((prev) => (prev + 1) % slides.length)
     }

     const handlePrev = () => {
          setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
     }

     const currentSlide = slides[currentIndex]

     const renderRightContent = () => {
          switch (currentSlide.type) {
               case "stablecoins":
                    return <StablecoinsContent />
               case "decentralized-ledger-technology":
                    return <DecentralizedLedgerContent />
               case "virtual-accounts":
                    return <VirtualAccountsContent />
               case "instant-bank-transfers":
                    return <InstantBankTransfersContent />
               default:
                    return (
                         <div className="aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10">
                              <div className="z-10 w-full h-full">
                                   <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] m-auto">
                                        <Image
                                             src={currentSlide.bg || "/placeholder.svg?height=400&width=300"}
                                             alt="background"
                                             fill
                                             className="z-10 object-cover"
                                        />
                                   </div>
                              </div>
                         </div>
                    )
          }
     }

     return (
          <div>
               {/* Desktop View */}
               <div className="w-full relative flex-col hidden md:flex">
                    <div className="w-full h-screen pt-24 pb-10 overflow-hidden">
                         <div className="grid items-center justify-center w-full h-full grid-cols-2 px-10 bg-[#ECEAE5] rounded-3xl relative">
                              {/* Prev Button */}
                              <button
                                   onClick={handlePrev}
                                   className="absolute z-20 p-2 transition-colors -translate-y-1/2 rounded-full left-8 top-1/2 bg-white/10 hover:bg-white/20"
                              >
                                   <div className="w-4 h-4 rotate-90">
                                        <Image
                                             src="/assets/icons/arrow_downward.svg"
                                             alt="prev"
                                             width={16}
                                             height={16}
                                             className="w-full h-full"
                                        />
                                   </div>
                              </button>
                              {/* Next Button */}
                              <button
                                   onClick={handleNext}
                                   className="absolute z-20 p-2 transition-colors -translate-y-1/2 rounded-full right-8 top-1/2 bg-white/10 hover:bg-white/20"
                              >
                                   <div className="w-4 h-4 rotate-[270deg]">
                                        <Image
                                             src="/assets/icons/arrow_downward.svg"
                                             alt="next"
                                             width={16}
                                             height={16}
                                             className="w-full h-full"
                                        />
                                   </div>
                              </button>
                              {/* Left Content */}
                              <div className="flex flex-col justify-center h-full col-span-1 gap-4 px-10">
                                   <div className="flex flex-col max-w-lg gap-4 m-auto">
                                        <h3 className="text-black text-2xl md:text-4xl">{currentSlide.title}</h3>
                                        <p className="text-black text-sm font-spacemono">{currentSlide.description}</p>
                                   </div>
                              </div>

                              {/* Right Content - Dynamic based on slide type */}
                              <div className="flex items-center justify-center h-full col-span-1 overflow-hidden">
                                   {renderRightContent()}
                              </div>

                              {/* Progress Bar */}
                              <div className="absolute bottom-10 left-0 right-0 w-[95%] m-auto flex flex-col gap-4">
                                   <div className="flex items-center justify-between">
                                        <p className="text-black text-xs tracking-[0.1em] uppercase">WHY HIFI</p>
                                        <p className="text-black text-xs tracking-[0.1em] uppercase">
                                             {currentIndex + 1}/{slides.length}
                                        </p>
                                   </div>
                                   <div className="relative h-[2px] bg-white rounded-full">
                                        <div
                                             className="absolute top-0 left-0 h-[2px] bg-[#C0B395] rounded-full z-10"
                                             style={{ width: `${progress}%` }}
                                        ></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Mobile View */}
               <div className="relative flex flex-col gap-20 px-4 md:hidden">
                    <div className="flex flex-col w-full gap-8">
                         <StablecoinsContent />
                         <div className="flex flex-col gap-4 px-2 m-auto text-center md:text-left">
                              <h3 className="text-black text-2xl md:text-4xl ">API's for instant global money movement</h3>
                              <p className="text-black text-sm font-spacemono">
                                   HIFI provides the infrastructure for moving money across any bank or stablecoin. Build any money movement
                                   experience with our API's.
                              </p>
                         </div>
                    </div>
                    <div className="flex flex-col w-full gap-8">
                         <VirtualAccountsContent />
                         <div className="flex flex-col gap-4 px-2 m-auto text-center md:text-left">
                              <h3 className="text-black text-2xl md:text-4xl ">Virtual Accounts</h3>
                              <p className="text-black text-sm font-spacemono">
                                   Setup a digital account to manage operations in USDC or any stablecoin.
                              </p>
                         </div>
                    </div>
                    <div className="flex flex-col w-full gap-8">
                         <DecentralizedLedgerContent />
                         <div className="flex flex-col gap-4 px-2 m-auto text-center md:text-left">
                              <h3 className="text-black text-2xl md:text-4xl ">
                                   Connect your company to decentralized ledger technology
                              </h3>
                              <p className="text-black text-sm font-spacemono">
                                   Get started with the fastest payment rails to speed up every aspect of your business - from cash flow to
                                   settlement.
                              </p>
                         </div>
                    </div>
                    <div className="flex flex-col w-full gap-8">
                         <InstantBankTransfersContent />
                         <div className="flex flex-col gap-4 px-2 m-auto text-center md:text-left">
                              <h3 className="text-black text-2xl md:text-4xl ">Instant bank transfers</h3>
                              <p className="text-black text-sm font-spacemono">
                                   Accelerate your payments experience with stablecoins, Instant ACH, and RTP to get paid faster.
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     )
}
