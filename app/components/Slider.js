'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const slides = [
     {
          id: 1,
          title: 'The super payments API for stablecoins',
          description:
               'HIFI provides the infrastructure for moving money across any bank or stablecoin. Build any money movement experience with our API\'s.',
          type: 'stablecoins',
     },
     {
          id: 2,
          title: 'Connect your company to decentralized ledger technology',
          description:
               'Get started with the fastest payment rails to speed up every aspect of your business – from cash flow to settlement.',
          type: 'decentralized-ledger-technology',
          screenshot: '/FeatureAnimations/02/Dashboard.png',
          bg: '/assets/card13.webp',
     },
     {
          id: 3,
          title: 'Virtual Accounts',
          description:
               'Setup a digital account to manage operations in USDC or any stablecoin.',
          type: 'virtual-accounts',
     },
     {
          id: 4,
          title: 'Instant bank transfers',
          description:
               'Accelerate your payments experience with stablecoins, Instant ACH, and RTP to get paid faster.',
          type: 'instant-bank-transfers',
     },
]

const SLIDE_INTERVAL = 4000

const Slider = () => {
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
               case 'stablecoins':
                    return (
                         <div className='aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10'>
                              <div className='z-10 w-full h-full'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] m-auto'>
                                        <div className='relative z-30 w-[55%]'>
                                             <Image
                                                  src="/assets/card17.webp"
                                                  alt='top card'
                                                  width={500}
                                                  height={500}
                                                  className='w-full h-auto'
                                             />
                                        </div>
                                        <div className='relative z-30 w-[18%]'>
                                             <Image
                                                  src="slider-one-icon.svg"
                                                  alt='icon'
                                                  width={123}
                                                  height={123}
                                                  className='w-full h-auto'
                                             />
                                        </div>
                                        <div className='relative z-30 w-[55%]'>
                                             <Image
                                                  src="/assets/card18.webp"
                                                  alt='bottom card'
                                                  width={500}
                                                  height={500}
                                                  className='w-full h-auto'
                                             />
                                        </div>
                                        <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                             <svg
                                                  width='6'
                                                  height='25%'
                                                  viewBox='0 0 6 200'
                                                  preserveAspectRatio='xMidYMid slice'
                                                  fill='none'
                                                  xmlns='http://www.w3.org/2000/svg'
                                             >
                                                  <path
                                                       d='M3 0L3 200'
                                                       stroke='white'
                                                       strokeWidth='0.5'
                                                       strokeLinecap='round'
                                                  />
                                                  {[0, 0.5, 1].map((begin, i) => (
                                                       <circle key={i} cx='3' cy='0' r='3' fill='white'>
                                                            <animateMotion
                                                                 dur='2s'
                                                                 repeatCount='indefinite'
                                                                 path='M0 0L0 200'
                                                                 keyPoints='0;1'
                                                                 keyTimes='0;1'
                                                                 calcMode='linear'
                                                                 begin={`${begin}s`}
                                                            />
                                                       </circle>
                                                  ))}
                                             </svg>
                                        </div>
                                        <Image
                                             src="/assets/card16.webp"
                                             alt='background'
                                             fill
                                             className='z-10 object-cover'
                                        />
                                   </div>
                              </div>
                         </div>
                    )

               case 'decentralized-ledger-technology':
                    return (
                         <div className='aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10'>
                              <div className='z-10 w-full h-full'>
                                   <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] bg-[#33171E] m-auto">
                                        <div className="absolute top-[25%] right-0 z-30 w-[25%] opacity-20 flex items-center justify-end" style={{ opacity: 1, willChange: 'transform' }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 96 138"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M0 1H18C34.5685 1 48 14.4315 48 31V107C48 123.569 61.4315 137 78 137H96"
                                                       stroke="#7C4A65"
                                                  />
                                                  <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                       <animateMotion
                                                            dur="2"
                                                            repeatCount="indefinite"
                                                            path="M0 1H18C34.5685 1 48 14.4315 48 31V107C48 123.569 61.4315 137 78 137H96"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="0"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div className="absolute top-[48%] left-0 z-30 w-[25%] opacity-20 flex items-center justify-start" style={{ opacity: 1, willChange: 'transform' }}>
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 96 138"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       d="M0 1H18C34.5685 1 48 14.4315 48 31V107C48 123.569 61.4315 137 78 137H96"
                                                       stroke="#7C4A65"
                                                  />
                                                  <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                       <animateMotion
                                                            dur="2"
                                                            repeatCount="indefinite"
                                                            path="M0 1H18C34.5685 1 48 14.4315 48 31V107C48 123.569 61.4315 137 78 137H96"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="1"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>
                                        <div
                                             className="relative z-30 w-[55%]"
                                             style={{ opacity: 1, willChange: 'transform', transform: 'none' }}
                                        >
                                             <Image
                                                  src="/assets/card5.webp"
                                                  alt="Feature 3 Card 1"
                                                  loading="lazy"
                                                  width={240}
                                                  height={0}
                                                  decoding="async"
                                                  className="w-full h-auto"
                                                  style={{ color: 'transparent' }}
                                                  sizes="(max-width: 768px) 90vw, 240px"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[18%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/icons/flexible-business.svg"
                                                  alt="Feature 3 Icon"
                                                  loading="lazy"
                                                  width={77}
                                                  height={77}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card6.webp"
                                                  alt="Feature 3 Card 1"
                                                  loading="lazy"
                                                  width={240}
                                                  height={0}
                                                  decoding="async"
                                                  className="w-full h-auto"
                                                  style={{ color: 'transparent' }}
                                                  sizes="(max-width: 768px) 90vw, 240px"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )

               case 'virtual-accounts':
                    return (
                         <div className='aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10'>
                              <div className='z-10 w-full h-full'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] m-auto'>
                                        <div className='absolute inset-0 z-10'>
                                             <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10'></div>
                                             <Image
                                                  src="/assets/dollor.webp"
                                                  alt='background'
                                                  fill
                                                  className='object-cover'
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )

               case 'instant-bank-transfers':
                    return (
                         <div className="aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10">
                              <div className="z-20 w-full h-full">
                                   <div className="relative flex flex-col items-center justify-center w-full h-full gap-12 bg-dark-sienna">

                                        {/* Left SVG */}
                                        <div
                                             className="absolute top-[55%] left-0 z-30 w-[23%] flex items-start justify-start opacity-20"
                                             style={{ willChange: 'transform', opacity: 1 }}
                                        >
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 96 76"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                             >
                                                  <path
                                                       d="M0 1H18C34.5685 1 48 14.4315 48 31V45C48 61.5685 61.4315 75 78 75H96"
                                                       stroke="#ECEAE5"
                                                  />
                                                  <circle cx="0" cy="0" r="3" fill="#ECEAE5" opacity="0.57">
                                                       <animateMotion
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                            path="M0 1H18C34.5685 1 48 14.4315 48 31V45C48 61.5685 61.4315 75 78 75H96"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="0"
                                                       />
                                                  </circle>
                                             </svg>
                                        </div>

                                        {/* Right SVG */}
                                        <div
                                             className="absolute top-[45%] right-0 z-30 w-[42%] flex items-end justify-end"
                                             style={{ willChange: 'transform', transform: 'none', opacity: 1 }}
                                        >
                                             <svg
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 176 59"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="overflow-visible"
                                                  preserveAspectRatio="xMidYMid meet"
                                             >
                                                  <defs>
                                                       <path
                                                            id="right-path"
                                                            d="M0 1H59.5C75.2401 1 88 13.7599 88 29.5V29.5C88 45.2401 100.76 58 116.5 58H176"
                                                       />
                                                  </defs>

                                                  <use href="#right-path" stroke="#ECEAE5" />

                                                  <circle cx="0" cy="0" r="3" fill="#ECEAE5" opacity="1">
                                                       <animateMotion
                                                            dur="2s"
                                                            repeatCount="indefinite"
                                                            keyPoints="0;1;1"
                                                            keyTimes="0;0.5;1"
                                                            calcMode="linear"
                                                            begin="1s"
                                                       >
                                                            <mpath href="#right-path" />
                                                       </animateMotion>
                                                  </circle>
                                             </svg>

                                        </div>

                                        {/* Title */}
                                        <div className="relative z-30 flex items-end justify-center h-28 w-80">
                                             <h4 className="text-white text-xl md:text-2xl text-center">
                                                  Settled in seconds
                                             </h4>
                                        </div>

                                        {/* Icon Image */}
                                        <div className="relative z-30 w-[18%]">
                                             <Image
                                                  src="/assets/icons/power1.svg"
                                                  alt="Feature 5 Icon"
                                                  width={80}
                                                  height={80}
                                                  className="w-full h-auto"
                                             />
                                        </div>

                                        {/* Main Card Image */}
                                        <div className="relative z-30 pb-20 w-[55%]">
                                             <Image
                                                  alt="Feature 3 Card 2"
                                                  src="/assets/card20.webp"
                                                  width={240}
                                                  height={0}
                                                  sizes="(max-width: 768px) 90vw, 240px"
                                                  className="w-full h-auto"
                                             />
                                        </div>

                                        {/* Background Image */}
                                        <Image
                                             src="/assets/card19.webp"
                                             alt="Feature 1 Icon"
                                             fill
                                             className="z-10 object-cover"
                                        />
                                   </div>
                              </div>
                         </div>
                    )

               default:
                    return (
                         <div className='aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10'>
                              <div className='z-10 w-full h-full'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] m-auto'>
                                        <Image
                                             src={currentSlide.bg}
                                             alt='background'
                                             fill
                                             className='z-10 object-cover'
                                        />
                                   </div>
                              </div>
                         </div>
                    )
          }
     }

     return (
          <div className='w-full relative flex-col hidden md:flex'>
               <div className='w-full h-screen pt-24 pb-10 overflow-hidden'>
                    <div className='grid items-center justify-center w-full h-full grid-cols-2 px-10 bg-[#ECEAE5] rounded-3xl relative'>
                         {/* Prev Button */}
                         <button
                              onClick={handlePrev}
                              className='absolute z-20 p-2 transition-colors -translate-y-1/2 rounded-full left-8 top-1/2 bg-white/10 hover:bg-white/20'
                         >
                              <div className='w-4 h-4 rotate-90'>
                                   <Image
                                        src='/assets/icons/arrow_downward.svg'
                                        alt='prev'
                                        width={16}
                                        height={16}
                                        className='w-full h-full'
                                   />
                              </div>
                         </button>
                         {/* Next Button */}
                         <button
                              onClick={handleNext}
                              className='absolute z-20 p-2 transition-colors -translate-y-1/2 rounded-full right-8 top-1/2 bg-white/10 hover:bg-white/20'
                         >
                              <div className='w-4 h-4 rotate-[270deg]'>
                                   <Image
                                        src='/assets/icons/arrow_downward.svg'
                                        alt='next'
                                        width={16}
                                        height={16}
                                        className='w-full h-full'
                                   />
                              </div>
                         </button>
                         {/* Left Content */}
                         <div className='flex flex-col justify-center h-full col-span-1 gap-4 px-10'>
                              <div className='flex flex-col max-w-lg gap-4 m-auto'>
                                   <h3 className='text-black text-2xl md:text-4xl'>{currentSlide.title}</h3>
                                   <p className='text-black text-sm font-spacemono'>{currentSlide.description}</p>
                              </div>
                         </div>

                         {/* Right Content - Dynamic based on slide type */}
                         <div className='flex items-center justify-center h-full col-span-1 overflow-hidden'>
                              {renderRightContent()}
                         </div>

                         {/* Progress Bar */}
                         <div className='absolute bottom-10 left-0 right-0 w-[95%] m-auto flex flex-col gap-4'>
                              <div className='flex items-center justify-between'>
                                   <p className='text-black text-xs tracking-[0.1em] uppercase'>WHY HIFI</p>
                                   <p className='text-black text-xs tracking-[0.1em] uppercase'>{currentIndex + 1}/{slides.length}</p>
                              </div>
                              <div className='relative h-[2px] bg-white rounded-full'>
                                   <div className='absolute top-0 left-0 h-[2px] bg-[#C0B395] rounded-full z-10'style={{ width: `${progress}%` }}></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}


export default Slider