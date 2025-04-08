'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';

const MoveMoneyAcrossBorders = () => {
     const [animationClass, setAnimationClass] = useState('moveCircles');

     useEffect(() => {
     }, []);
     return (
          <div>
               <div className='relative flex flex-col'>
                    <div className='flex flex-col items-center justify-center w-full h-full gap-5 px-4 md:flex-row md:gap-8 md:px-10'>
                         <div className='flex flex-col justify-center order-2 md:order-2 h-full md:w-1/2 gap-4 px-2 md:px-10'>
                              <div className='flex flex-col max-w-lg gap-8 md:gap-[60px] m-auto px-2 md:px-0'>
                                   <div className='flex flex-col gap-4 text-center md:text-left'>
                                        <h3 className='text-black text-2xl md:text-4xl '>Move money across borders for global businesses</h3>
                                        <p className='text-black text-sm font-spacemono'>Process payments, initiate payouts, and transfer funds arounds the world - at the speed of light.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='flex items-center justify-center order-1 md:order-1 h-full w-full md:w-1/2'>
                              <div className='aspect-[5/7] md:max-w-[430px] w-full rounded-[30px] relative  overflow-hidden'>
                                   <div className='relative flex flex-col items-center justify-center w-full h-full gap-14'>
                                        <div className="relative z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card14.webp"
                                                  alt="Feature 1 Icon"
                                                  loading="lazy"
                                                  width={1500}
                                                  height={1500}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[18%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/icons/wordl2.svg"
                                                  className="w-full h-auto"
                                                  alt="Feature 1 Icon"
                                                  loading="lazy"
                                                  width={80}
                                                  height={80}
                                                  decoding="async"
                                             />
                                        </div>
                                        <div className="relative z-30 w-[55%]" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>
                                             <Image
                                                  src="/assets/card15.webp"
                                                  alt="Feature 1 Icon"
                                                  loading="lazy"
                                                  width={1500}
                                                  height={1500}
                                                  className="w-full h-auto"
                                             />
                                        </div>
                                        <div className="absolute z-20 w-full h-full" style={{ opacity: 1, willChange: 'transform' }}>
                                             {/* First SVG */}
                                             <svg
                                                  style={{ position: 'absolute', left: '20%' }}
                                                  width="6"
                                                  height="100%"
                                                  viewBox="0 0 6 577"
                                                  preserveAspectRatio="xMidYMid slice"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path d="M3 0L3 577" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear' }}
                                                  />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear', animationDelay: '0.5s' }}
                                                  />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear', animationDelay: '1s' }}
                                                  />
                                             </svg>

                                             {/* Second SVG */}
                                             <svg
                                                  style={{ position: 'absolute', left: '50%' }}
                                                  width="6"
                                                  height="100%"
                                                  viewBox="0 0 6 577"
                                                  preserveAspectRatio="xMidYMid slice"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path d="M3 0L3 577" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear' }}
                                                  />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear', animationDelay: '1s' }}
                                                  />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear', animationDelay: '1.5s' }}
                                                  />
                                             </svg>

                                             {/* Third SVG */}
                                             <svg
                                                  style={{ position: 'absolute', left: '80%' }}
                                                  width="6"
                                                  height="100%"
                                                  viewBox="0 0 6 577"
                                                  preserveAspectRatio="xMidYMid slice"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path d="M3 0L3 577" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear' }}
                                                  />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear', animationDelay: '0.5s' }}
                                                  />
                                                  <circle
                                                       cx="3"
                                                       cy="0"
                                                       r="3"
                                                       fill="white"
                                                       opacity="1"
                                                       transformOrigin="3px 0px"
                                                       className={animationClass}
                                                       style={{ animationDuration: '2s', animationTimingFunction: 'linear', animationDelay: '1s' }}
                                                  />
                                             </svg>
                                        </div>
                                        <Image src='/assets/card13.webp' alt='card13' width={430} height={602} className='z-10 object-cover absolute inset-0 w-full h-full' />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="w-full h-auto pb-[60px] md:pb-[120px]"></div>
               <div className='grid h-full grid-cols-1 md:grid-cols-3 '>
                    <div className='col-span-1 first:mt-0 mt-[-1px] md:mt-0 first:ml-0 ml-[-1px]'>
                         <div className='relative flex flex-col  w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl  border-[#eceae5] group gap-4 '>
                              <Image src='/assets/icons/BoostRevenue.svg' alt='BoostRevenue' width={40} height={40} />
                              <h2 className='text-black text-xl md:text-2xl'>Boost your revenue</h2>
                              <p className='text-black text-sm font-spacemono'>Built to maximize cost-savings and allow businesses to secure more cash per transaction.</p>
                         </div>
                    </div>
                    <div className='col-span-1 first:mt-0 mt-[-1px] md:mt-0 first:ml-0 ml-[-1px]'>
                         <div className='relative flex flex-col  w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl  border-[#eceae5] group gap-4 '>
                              <Image src='/assets/icons/SmartTransactionRouting.svg' alt='SmartTransactionRouting' width={40} height={40} />
                              <h2 className='text-black text-xl md:text-2xl'>Smart transaction routing</h2>
                              <p className='text-black text-sm font-spacemono'>Transact with precision and speed across multiple payment chains to identify the fastest and most cost-effective rail.</p>
                         </div>
                    </div>
                    <div className='col-span-1 first:mt-0 mt-[-1px] md:mt-0 first:ml-0 ml-[-1px]'>
                         <div className='relative flex flex-col  w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl  border-[#eceae5] group gap-4 '>
                              <Image src='/assets/icons/HyperSpeedSettlement.svg' alt='HyperSpeedSettlement' width={40} height={40} />
                              <h2 className='text-black text-xl md:text-2xl'>Hyper-speed settlement</h2>
                              <p className='text-black text-sm font-spacemono'>Never wait weeks for payments, move money in seconds.</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default MoveMoneyAcrossBorders