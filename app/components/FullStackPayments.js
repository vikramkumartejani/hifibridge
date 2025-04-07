import Image from 'next/image'
import React from 'react'

const FullStackPayments = () => {
     return (
          <div className='relative flex flex-col'>
               <div className='grid items-center justify-center w-full h-full grid-cols-1 gap-8 px-4 md:px-10 md:grid-cols-2'>
                    <div className='flex flex-col justify-center order-2 h-full col-span-1 gap-4 px-0 md:px-10 md:order-1'>
                         <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
                              <div className='flex flex-col gap-4 '>
                                   <h3 className='text-black text-2xl md:text-4xl '>Full stack payments</h3>
                                   <p className='text-black text-sm  font-spacemono'>Before HIFI, new fintech companies would have to spend months – if not years – developing countless layers of middleware features and partnering with legacy financial institutions. With HIFI, you get a one-stop-shop.</p>
                              </div>
                              <div className='flex flex-col gap-[26px] '>
                                   <div className='relative flex items-center rounded-lg cursor-pointer gap-x-4 '>
                                        <div className='relative flex items-center justify-center flex-none w-5 h-5 mt-1 transition-all duration-300 rounded-md bg-[#d9e6e1]'>
                                             <div className='relative w-2 h-2'>
                                                  <Image src='/assets/icons/check.svg' alt='check' width={8} height={8} className=' absolute w-full h-full top-0 bottom-0 left-0 right-0 ' />
                                             </div>
                                        </div>
                                        <p className='text-black text-sm font-spacemono'>USDC, USDT, PYUSD</p>
                                   </div>
                                   <div className='relative flex items-center rounded-lg cursor-pointer gap-x-4 '>
                                        <div className='relative flex items-center justify-center flex-none w-5 h-5 mt-1 transition-all duration-300 rounded-md bg-[#d9e6e1]'>
                                             <div className='relative w-2 h-2'>
                                                  <Image src='/assets/icons/check.svg' alt='check' width={8} height={8} className=' absolute w-full h-full top-0 bottom-0 left-0 right-0 ' />
                                             </div>
                                        </div>
                                        <p className='text-black text-sm font-spacemono'>ACH, Wire, & local rail connectivity</p>
                                   </div>
                                   <div className='relative flex items-center rounded-lg cursor-pointer gap-x-4 '>
                                        <div className='relative flex items-center justify-center flex-none w-5 h-5 mt-1 transition-all duration-300 rounded-md bg-[#d9e6e1]'>
                                             <div className='relative w-2 h-2'>
                                                  <Image src='/assets/icons/check.svg' alt='check' width={8} height={8} className=' absolute w-full h-full top-0 bottom-0 left-0 right-0 ' />
                                             </div>
                                        </div>
                                        <p className='text-black text-sm font-spacemono'>KYC/KYB API’s for compliance</p>
                                   </div>
                                   <div className='relative flex items-center rounded-lg cursor-pointer gap-x-4 '>
                                        <div className='relative flex items-center justify-center flex-none w-5 h-5 mt-1 transition-all duration-300 rounded-md bg-[#d9e6e1]'>
                                             <div className='relative w-2 h-2'>
                                                  <Image src='/assets/icons/check.svg' alt='check' width={8} height={8} className=' absolute w-full h-full top-0 bottom-0 left-0 right-0 ' />
                                             </div>
                                        </div>
                                        <p className='text-black text-sm font-spacemono'>Wallet and custody services</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='flex items-center justify-center order-1 h-full col-span-1 md:order-2'>
                         <div className='aspect-[3/4] md:max-w-[430px] w-full rounded-[30px] relative bg-[#33171e] overflow-hidden'>
                              <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[400px] gap-8 bg-[#33171e]">
                                   <div className="absolute top-1/2 -translate-y-1/2 right-[18.1%] z-30 w-[32%] opacity-20 flex items-center justify-end" style={{ opacity: 1, willChange: 'transform' }}>
                                        <svg width="100%" height="100%" viewBox="0 0 122 368" className="overflow-visible" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M0.5 0C0.5 9.08 7.86 16.44 16.94 16.44H109.94C116.32 16.44 121.5 21.61 121.5 28V336C121.5 343.29 115.59 349.21 108.29 349.21H19.29C8.91 349.21 0.5 357.63 0.5 368" stroke="#7C4A65"></path>
                                             <circle cx="0.5" cy="0" r="3" fill="#7C4A65" className="z-20"></circle>
                                             <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                  <animateMotion dur="4" repeatCount="indefinite" path="M0.5 0C0.5 9.08 7.86 16.44 16.94 16.44H109.94C116.32 16.44 121.5 21.61 121.5 28V336C121.5 343.29 115.59 349.21 108.29 349.21H19.29C8.91 349.21 0.5 357.63 0.5 368" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear" begin="0"></animateMotion>
                                             </circle>
                                             <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                  <animateMotion dur="4" repeatCount="indefinite" path="M0.5 0C0.5 9.08 7.86 16.44 16.94 16.44H109.94C116.32 16.44 121.5 21.61 121.5 28V336C121.5 343.29 115.59 349.21 108.29 349.21H19.29C8.91 349.21 0.5 357.63 0.5 368" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear" begin="1.3333333333333333"></animateMotion>
                                             </circle>
                                             <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                  <animateMotion dur="4" repeatCount="indefinite" path="M0.5 0C0.5 9.08 7.86 16.44 16.94 16.44H109.94C116.32 16.44 121.5 21.61 121.5 28V336C121.5 343.29 115.59 349.21 108.29 349.21H19.29C8.91 349.21 0.5 357.63 0.5 368" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear" begin="2.6666666666666665"></animateMotion>
                                             </circle>
                                        </svg>
                                   </div>
                                   <div className="absolute top-1/2 -translate-y-1/2 left-[18.1%] z-30 w-[32%] opacity-20 flex items-center justify-start" style={{ opacity: 1, willChange: 'transform' }}>
                                        <svg width="100%" height="100%" viewBox="0 0 122 368" className="overflow-visible" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M121.5 0C121.5 9.08 114.14 16.44 105.06 16.44H12.06C5.68 16.44 0.5 21.61 0.5 28V336C0.5 343.29 6.41 349.21 13.71 349.21H102.71C113.09 349.21 121.5 357.63 121.5 368" stroke="#7C4A65"></path>
                                             <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                  <animateMotion dur="4" repeatCount="indefinite" path="M121.5 0C121.5 9.08 114.14 16.44 105.06 16.44H12.06C5.68 16.44 0.5 21.61 0.5 28V336C0.5 343.29 6.41 349.21 13.71 349.21H102.71C113.09 349.21 121.5 357.63 121.5 368" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear" begin="0.6666666666666666"></animateMotion>
                                             </circle>
                                             <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                  <animateMotion dur="4" repeatCount="indefinite" path="M121.5 0C121.5 9.08 114.14 16.44 105.06 16.44H12.06C5.68 16.44 0.5 21.61 0.5 28V336C0.5 343.29 6.41 349.21 13.71 349.21H102.71C113.09 349.21 121.5 357.63 121.5 368" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear" begin="2"></animateMotion>
                                             </circle>
                                             <circle cx="0" cy="0" r="3" fill="#7C4A65" className="z-20">
                                                  <animateMotion dur="4" repeatCount="indefinite" path="M121.5 0C121.5 9.08 114.14 16.44 105.06 16.44H12.06C5.68 16.44 0.5 21.61 0.5 28V336C0.5 343.29 6.41 349.21 13.71 349.21H102.71C113.09 349.21 121.5 357.63 121.5 368" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear" begin="3.333333333333333"></animateMotion>
                                             </circle>
                                        </svg>
                                   </div>
                                   <div className="relative z-30 w-[55%] overflow-visible" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                        <Image
                                             src="/assets/your-application.webp"
                                             alt="Feature 3 Card 1"
                                             loading="lazy"
                                             width={480}
                                             height={0}
                                             className="w-full h-auto overflow-visible"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default FullStackPayments