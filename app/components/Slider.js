'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const slides = [
     {
          id: 1,
          title: 'The super payments API for stablecoins',
          description:
               'HIFI provides the infrastructure for moving money across any bank or stablecoin. Build any money movement experience with our API\'s.',
          type: 'cards', 
          topCard: '/FeatureAnimations/01/Card1.png',
          icon: '/FeatureAnimations/01/Icon.svg',
          bottomCard: '/FeatureAnimations/01/Card2.png',
          bg: '/assets/card13.webp',
     },
     {
          id: 2,
          title: 'Connect your company to decentralized ledger technology',
          description:
               'Get started with the fastest payment rails to speed up every aspect of your business – from cash flow to settlement.',
          type: 'dashboard', 
          screenshot: '/FeatureAnimations/02/Dashboard.png',
          bg: '/assets/card13.webp',
     },
     {
          id: 3,
          title: 'Virtual Accounts',
          description:
               'Setup a digital account to manage operations in USDC or any stablecoin.',
          type: 'mobile', 
          phone: '/FeatureAnimations/03/Phone.png',
          appScreens: [
               '/FeatureAnimations/03/Screen1.png',
               '/FeatureAnimations/03/Screen2.png',
          ],
          bg: '/assets/card13.webp',
     },
     {
          id: 4,
          title: 'Instant bank transfers',
          description:
               'Accelerate your payments experience with stablecoins, Instant ACH, and RTP to get paid faster.',
          type: 'animation', 
          chart: '/FeatureAnimations/04/Chart.png',
          animationElements: [
               '/FeatureAnimations/04/Element1.png',
               '/FeatureAnimations/04/Element2.png',
          ],
          bg: '/assets/card13.webp',
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
               case 'cards':
                    return (
                         <div className='aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10'>
                              <div className='z-10 w-full h-full'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] m-auto'>
                                        {/* Top Card */}
                                        <div className='relative z-30 w-[55%]'>
                                             <Image
                                                  src={currentSlide.topCard}
                                                  alt='top card'
                                                  width={240}
                                                  height={0}
                                                  className='w-full h-auto'
                                             />
                                        </div>
                                        {/* Center Icon */}
                                        <div className='relative z-30 w-[18%]'>
                                             <Image
                                                  src={currentSlide.icon}
                                                  alt='icon'
                                                  width={80}
                                                  height={80}
                                                  className='w-full h-auto'
                                             />
                                        </div>
                                        {/* Bottom Card */}
                                        <div className='relative z-30 w-[55%]'>
                                             <Image
                                                  src={currentSlide.bottomCard}
                                                  alt='bottom card'
                                                  width={240}
                                                  height={0}
                                                  className='w-full h-auto'
                                             />
                                        </div>
                                        {/* Animated Line */}
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
                                             src={currentSlide.bg}
                                             alt='background'
                                             fill
                                             className='z-10 object-cover'
                                        />
                                   </div>
                              </div>
                         </div>
                    )

               case 'dashboard':
                    return (
                         <div className='aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10'>
                              <div className='z-10 w-full h-full'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] m-auto'>
                                        <div className='w-full h-full relative'>
                                             <Image
                                                  src={currentSlide.screenshot || '/FeatureAnimations/02/Dashboard.png'}
                                                  alt='dashboard'
                                                  width={600}
                                                  height={400}
                                                  className='w-full h-full object-contain z-30 relative'
                                             />

                                             <div className='absolute top-0 left-0 w-full h-full z-40'>
                                                  <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse'></div>
                                                  <div className='absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full animate-ping'></div>
                                                  <div className='absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse'></div>
                                             </div>

                                             <Image
                                                  src={currentSlide.bg}
                                                  alt='background'
                                                  fill
                                                  className='z-10 object-cover'
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )

               case 'mobile':
                    return (
                         <div className='aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10'>
                              <div className='z-10 w-full h-full'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] m-auto'>
                                        {/* Phone mockup */}
                                        <div className='absolute left-1/2 -translate-x-1/2 z-30 w-[60%]'>
                                             <Image
                                                  src={currentSlide.phone || '/FeatureAnimations/03/Phone.png'}
                                                  alt='Phone'
                                                  width={300}
                                                  height={600}
                                                  className='w-full h-auto'
                                             />
                                        </div>

                                        {currentSlide.appScreens && currentSlide.appScreens.length > 0 && (
                                             <>
                                                  <div className='absolute top-[20%] left-[10%] w-[40%] z-20 animate-float-slow'>
                                                       <Image
                                                            src={currentSlide.appScreens[0]}
                                                            alt='app screen 1'
                                                            width={200}
                                                            height={400}
                                                            className='w-full h-auto rounded-xl shadow-lg'
                                                       />
                                                  </div>
                                                  {currentSlide.appScreens[1] && (
                                                       <div className='absolute top-[30%] right-[10%] w-[40%] z-20 animate-float'>
                                                            <Image
                                                                 src={currentSlide.appScreens[1]}
                                                                 alt='app screen 2'
                                                                 width={200}
                                                                 height={400}
                                                                 className='w-full h-auto rounded-xl shadow-lg'
                                                            />
                                                       </div>
                                                  )}
                                             </>
                                        )}

                                        <div className='absolute inset-0 z-10'>
                                             <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10'></div>
                                             <Image
                                                  src={currentSlide.bg}
                                                  alt='background'
                                                  fill
                                                  className='object-cover'
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    )

               case 'animation':
                    return (

                         <div className='aspect-[5/7] max-w-[430px] w-full rounded-[30px] overflow-hidden relative z-10'>
                              <div className='z-10 w-full h-full'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-[5%] m-auto'></div>
                                   {/* Main chart/graph */}
                                   <div className='absolute inset-0 z-30 flex items-center justify-center'>
                                        <Image
                                             src={currentSlide.chart || '/FeatureAnimations/04/Chart.png'}
                                             alt='chart'
                                             width={500}
                                             height={300}
                                             className='w-[90%] h-auto object-contain'
                                        />
                                   </div>

                                   {currentSlide.animationElements && currentSlide.animationElements.length > 0 && (
                                        <>
                                             <div className='absolute top-1/4 left-1/4 w-[20%] z-40 animate-bounce-slow'>
                                                  <Image
                                                       src={currentSlide.animationElements[0]}
                                                       alt='animation element 1'
                                                       width={100}
                                                       height={100}
                                                       className='w-full h-auto'
                                                  />
                                             </div>
                                             {currentSlide.animationElements[1] && (
                                                  <div className='absolute bottom-1/4 right-1/4 w-[20%] z-40 animate-pulse'>
                                                       <Image
                                                            src={currentSlide.animationElements[1]}
                                                            alt='animation element 2'
                                                            width={100}
                                                            height={100}
                                                            className='w-full h-auto'
                                                       />
                                                  </div>
                                             )}
                                        </>
                                   )}

                                   <div className='absolute inset-0 z-20'>
                                        <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M100,150 C150,50 350,250 400,150" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="10,10">
                                                  <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite" />
                                             </path>
                                        </svg>
                                   </div>

                                   <div className='absolute inset-0 z-10'>
                                        <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-teal-500/10'></div>
                                        <Image
                                             src={currentSlide.bg}
                                             alt='background'
                                             fill
                                             className='object-cover'
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
                                   <h3 className='text-black text-2xl md:text-4xl'>
                                        {currentSlide.title}
                                   </h3>
                                   <p className='text-black text-sm font-spacemono'>
                                        {currentSlide.description}
                                   </p>
                              </div>
                         </div>

                         {/* Right Content - Dynamic based on slide type */}
                         <div className='flex items-center justify-center h-full col-span-1 overflow-hidden'>
                              {renderRightContent()}
                         </div>

                         {/* Progress Bar */}
                         <div className='absolute bottom-10 left-0 right-0 w-[95%] m-auto flex flex-col gap-4'>
                              <div className='flex items-center justify-between'>
                                   <p className='text-black text-xs tracking-[0.1em] uppercase'>
                                        WHY HIFI
                                   </p>
                                   <p className='text-black text-xs tracking-[0.1em] uppercase'>
                                        {currentIndex + 1}/{slides.length}
                                   </p>
                              </div>
                              <div className='relative h-[2px] bg-white rounded-full'>
                                   <div
                                        className='absolute top-0 left-0 h-[2px] bg-[#C0B395] rounded-full z-10'
                                        style={{ width: `${progress}%` }}
                                   ></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Slider